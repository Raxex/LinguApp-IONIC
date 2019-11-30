import { Component, OnInit } from '@angular/core';
import { ConectorService } from '../conector.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WebDriverLogger } from 'blocking-proxy/built/lib/webdriver_logger';
import { EnviromentService } from '../enviroment.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-ex-fonetic-transcript',
  templateUrl: './ex-fonetic-transcript.page.html',
  styleUrls: ['./ex-fonetic-transcript.page.scss'],
})
export class ExFoneticTranscriptPage implements OnInit {
  requestHeaders: HttpHeaders;
  session_id: string;

  constructor(public env:EnviromentService,public conn:ConectorService,public http:HttpClient,private router: Router,public toastController: ToastController)
  { 

    this.getExcercice(this.conn.getHoldedExcercice());
  }
  ngOnInit() {
  }
  input:any
    pack1s=[
      '../../assets/keyboard/3.png',
      '../../assets/keyboard/6volteado.png',
      '../../assets/keyboard/Dmayuscula.png',
      '../../assets/keyboard/OOO.png',
      '../../assets/keyboard/SS.png',
      '../../assets/keyboard/a.png',
      '../../assets/keyboard/b.png',
      '../../assets/keyboard/bmayuscula.png',
      '../../assets/keyboard/bt.png'
    ];
  pack2s=[
      '../../assets/keyboard/d3.png',
      '../../assets/keyboard/d_.png',
      '../../assets/keyboard/e.png',
      '../../assets/keyboard/fotra.png',
      '../../assets/keyboard/g.png',
      '../../assets/keyboard/gj.png',
      '../../assets/keyboard/h.png',
      '../../assets/keyboard/i.png',
      '../../assets/keyboard/irara.png'
    ];
  pack3s=[
      '../../assets/keyboard/j.png',        
      '../../assets/keyboard/jn.png',       
      '../../assets/keyboard/k.png',        
      '../../assets/keyboard/kj.png',       
      '../../assets/keyboard/kmayuscula.png',
      '../../assets/keyboard/l.png',        
      '../../assets/keyboard/m.png',        
      '../../assets/keyboard/mj.png',       
      '../../assets/keyboard/n.png'         
    ];
  pack4s=[
      '../../assets/keyboard/n_.png',
      '../../assets/keyboard/n__.png',
      '../../assets/keyboard/nj.png',
      '../../assets/keyboard/nmayuscula.png',
      '../../assets/keyboard/o.png',
      '../../assets/keyboard/p.png',
      '../../assets/keyboard/pareceunajvolteada.png',
      '../../assets/keyboard/r.png',
      '../../assets/keyboard/rbota.png'
    ];
  pack5s=[
      '../../assets/keyboard/s.png',
      '../../assets/keyboard/t_.png',
      '../../assets/keyboard/tf.png',
      '../../assets/keyboard/u.png',
      '../../assets/keyboard/w.png',
      '../../assets/keyboard/x.png',
      '../../assets/keyboard/xj.png',
      '../../assets/keyboard/yt.png'
    ];
  addLetter(name)
  {
    let img    = document.createElement("img");
    img.src    = name;
    img.height = 20;
    img.width  = 20;
    document.getElementById("container").appendChild(img);
  }

  getExcercice(ex)
  {
    this.requestHeaders = new HttpHeaders().append('Content-Type', 'application/json').append('Accept', 'application/json');
      this.http.get(this.env.getUrl()+"Ejercicios/"+ex,{headers: this.requestHeaders}).subscribe(async data => {
        
        await this.conn.presentLoading();
        if(data[0] === undefined)
        {
          this.conn.presentToast("no se ha encontrado el ejercicio...",3);
          this.conn.presentToast("raro ,verdad?... consulta a tu administrador ( codigo de bug -> 852 )",3);
        }
        else
        {
          
        }
      }, error => {
        console.log(error);
      });
    console.log("level ->"+level+" - "+"session ->"+session+" - "+"exercice ->"+exercice);
  }
}
