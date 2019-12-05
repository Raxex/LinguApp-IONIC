
import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ConectorService } from '../conector.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WebDriverLogger } from 'blocking-proxy/built/lib/webdriver_logger';
import { EnviromentService } from '../enviroment.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-fonetic',
  templateUrl: './fonetic.page.html',
  styleUrls: ['./fonetic.page.scss'],
})
export class FoneticPage implements OnInit {

  [x: string]: any;
  requestHeaders: HttpHeaders;
  session_id: string;
  date_init:any
  date_finish:any
  register:any

  pack1s=[];
  pack2s=[];
  pack3s=[];
  pack4s=[];
  pack5s=[];
  // Fonemas A grafemas
  //abecedarios fonetico a abecedario comun
  constructor(public env:EnviromentService,public conn:ConectorService,public http:HttpClient,private router: Router,public toastController: ToastController)
  { 
    this.getKeyboard();
    this.getExcercice(this.conn.getHoldedExcercice());
    this.date_init = Date.now();
    
    if(this.conn.register_id == undefined)
    {
      this.conn.addRegister(this.conn.user_id, this.conn.getHoldedSession(), this.conn.getHoldedExcercice());
    }

  }
  ngOnInit() {
  }
  input:any

  gotten    = false;
  // stimulus  = "http://linguapp.cl/Pagina%20admin/uploads/chewie.mp3";
  answer:any   // respuesta
  exercice:any
  getKeyboard()
  {
    this.requestHeaders = new HttpHeaders().append('Content-Type', 'application/json').append('Accept', 'application/json');
    this.http.get(this.env.getUrl()+"Archivos/",{headers: this.requestHeaders}).subscribe(async data => {
    
    await this.conn.presentLoading();
    
    //console.log(data[0]);
    if(data[0] === undefined)
    {
      this.conn.presentToast("no se ha encontrado el ejercicio...",3);
      this.conn.presentToast("raro ,verdad?... consulta a tu administrador ( codigo de bug -> 851 )",3);
      this.gotten = false;
    }
    else
    {
      for(var index in data)
      {
        if(data[index].ID<=9)
        {
          this.pack1s.push(data[index]);
        }
        else if(data[index].ID<=18)
        {
          this.pack2s.push(data[index]);
        }
        else if(data[index].ID<=27)
        {
          this.pack3s.push(data[index]);
        }
        else if(data[index].ID<=36)
        {
          this.pack4s.push(data[index]);
        }
        else if(data[index].ID<=45)
        {
          this.pack5s.push(data[index]);
        }
        // this.pack_level_2.push(data[index].EJERCICIO_ID);
      }
    }
  }, error => {
    console.log(error);
  });

  }
  imaginaryResponse = "";
  addLetter(param)
  {
    let src    = '../../assets/'+param.imagen+'.png';
    let img    = document.createElement("img");
    img.src    = src;
    img.height = 20;
    img.width  = 20;
    document.getElementById("container").appendChild(img);
    //this.imaginaryResponse = this.imaginaryResponse+param.codigo;
  }

  del()
  {
    this.imaginaryResponse = this.imaginaryResponse.slice(5);
    let contenedor = document.getElementById("container");
    let contador = contenedor.childElementCount -1;
   
    let nodo = contenedor.childNodes[contador];
    console.log(nodo);
    contenedor.removeChild(nodo);
  }
  img_database:any
  getExcercice(ex)
  {//Archivos
    this.requestHeaders = new HttpHeaders().append('Content-Type', 'application/json').append('Accept', 'application/json');
      this.http.get(this.env.getUrl()+"Archivos/",{headers: this.requestHeaders}).subscribe(async data => {
        this.img_database = data;
        await this.conn.presentLoading();
      }, error => {
        console.log(error);
      });

    this.requestHeaders = new HttpHeaders().append('Content-Type', 'application/json').append('Accept', 'application/json');
      this.http.get(this.env.getUrl()+"Ejercicios/"+ex,{headers: this.requestHeaders}).subscribe(async data => {
        
        await this.conn.presentLoading();
        console.log("numero de ejercicio -> "+ex);
        
        console.log(data[0]);
        if(data[0] === undefined)
        {
          this.conn.presentToast("no se ha encontrado el ejercicio...",3);
          this.conn.presentToast("raro ,verdad?... consulta a tu administrador ( codigo de bug -> 852 )",3);
          this.gotten = false;
        }
        else
        {
          this.stimulus = (data[0].ESTIMULO.match(/.{1,5}/g));
          for(let element of this.stimulus)
          {
            for(let db of this.img_database)
            {
              if(db.codigo == element)
              {
                this.addLetter(db);
              }
            }
          }
          // this.stimulus.forEach(element => {
          //   this.img_database.forEach(db => {
          //     if(db.imagen == element)
          //     {
          //       this.addLetter(db);
          //       console.log(db);
          //     }
          //   });
          // });
          this.answer   = data[0].RESPUESTA_CORRECTA;
          this.gotten = true;
        }
      }, error => {
        console.log(error);
      });
  }
  async getUrlContent()
  {
    if(this.gotten)
    {
      return this.stimulus;
    }
    else
    {
      this.getExcercice(this.conn.getHoldedExcercice());
      await this.conn.presentLoading();
      return this.stimulus;
    }
    
  }

  errorCount=0;
  sendResponse()
  {
    console.log(this.answer);
    if(this.imaginaryResponse == this.answer)
    {
      console.log("registro =>"+this.conn.register_id);
      this.conn.finishRegister(this.conn.register_id,this.errorCount);
      this.date_finish = Date.now();
      this.conn.presentAlert("Correcto!","",'Tu respuesta ha sido correcta');
      this.router.navigate(['/inner-level-placer']);
    }
    else
    {

      this.errorCount = this.errorCount +1;
      this.conn.presentAlert("Incorrecto","",'intenta nuevamente');
    }
  }

 
}


