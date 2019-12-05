import { Component, OnInit } from '@angular/core';
import { ConectorService } from '../conector.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnviromentService } from '../enviroment.service';

@Component({
  selector: 'app-inner-level-placer',
  templateUrl: './inner-level-placer.page.html',
  styleUrls: ['./inner-level-placer.page.scss'],
})
export class InnerLevelPlacerPage implements OnInit
{
  
  pack_level_t = [];
  pack_level_1 = [];
  pack_level_2 = [];
  pack_level_3 = [];
  

  constructor(public env:EnviromentService,public conn:ConectorService,private router: Router,public toastController: ToastController,public http:HttpClient)
  { 
    //this.getTutorial();
    let user          = this.conn.getUserID();
    let session       = this.conn.getHoldedSession();
    // this.pack_level_t = this.getTutorial();
    // this.pack_level_1 = this.getLevel1();
    
    this.getLastExcercice();
    // this.pack_level_3 = this.getLevel3();
    // console.log(this.pack_level_2);
    // this.conn.getLastEx(user,session);
    // this.conn.wait(2);
    // this.getLastExcercice(this.conn.getLastExercice());
  }
  

  isenabledT1:boolean = false; //Tutorial 2
  isenabledT2:boolean = false; //Tutorial 3
  isenabledT3:boolean = false; //Tutorial 4
  isenabledT4:boolean = false; //Tutorial 5
  isenabledT5:boolean = false; //Tutorial 5
  

  isenabledA1:boolean = false; //Nivel 1 - Ejercicio 2
  isenabledA2:boolean = false; //Nivel 1 - Ejercicio 3
  isenabledA3:boolean = false; //Nivel 1 - Ejercicio 4
  isenabledA4:boolean = false; //Nivel 1 - Ejercicio 5
  isenabledA5:boolean = false; //Nivel 1 - Ejercicio 5
  

  isenabledB1:boolean = false; //Nivel 2 - Ejercicio 2
  isenabledB2:boolean = false; //Nivel 2 - Ejercicio 3
  isenabledB3:boolean = false; //Nivel 2 - Ejercicio 4
  isenabledB4:boolean = false; //Nivel 2 - Ejercicio 5
  isenabledB5:boolean = false; //Nivel 2 - Ejercicio 5
  
  isenabledC1:boolean = false; //Nivel 3 - Ejercicio 2
  isenabledC2:boolean = false; //Nivel 3 - Ejercicio 
  isenabledC3:boolean = false; //Nivel 3 - Ejercicio 4
  isenabledC4:boolean = false; //Nivel 3 - Ejercicio 5
  isenabledC5:boolean = false; //Nivel 3 - Ejercicio 5

  requestHeaders:any 

  ngOnInit()
  {
    
  }
 
  async getLastExcercice()
  {
    this.getTutorial();
    this.getLevel1();
    this.getLevel2();
    this.getLevel3();
    
    await this.conn.presentLoading();
    console.log("he capturado "+this.pack_level_t.length+" ejercicios de tutorial");
    switch(this.pack_level_t.length)
    {
      case 1:
      {
        this.isenabledT1 = true;
        break; 
      }
      case 2:
      {
        this.isenabledT1 = true;
        this.isenabledT2 = true;
        break; 
      }
      case 3:
      {
        this.isenabledT1 = true;
        this.isenabledT2 = true;
        this.isenabledT3 = true;
        break; 
      }
      case 4:
      {
        this.isenabledT1 = true;
        this.isenabledT2 = true;
        this.isenabledT3 = true;
        this.isenabledT4 = true;
        break; 
      }
      case 5:
      {
        this.isenabledT1 = true;
        this.isenabledT2 = true;
        this.isenabledT3 = true;
        this.isenabledT4 = true;
        this.isenabledT5 = true;
        break; 
      }
    }
    console.log("he capturado "+this.pack_level_1.length+" ejercicios de Nivel 1");
    switch(this.pack_level_1.length)
    {
      case 1:
      {
        this.isenabledA1 = true;
        break; 
      }
      case 2:
      {
        this.isenabledA1 = true;
        this.isenabledA2 = true;
        break; 
      }
      case 3:
      {
        this.isenabledA1 = true;
        this.isenabledA2 = true;
        this.isenabledA3 = true;
        break; 
      }
      case 4:
      {
        this.isenabledA1 = true;
        this.isenabledA2 = true;
        this.isenabledA3 = true;
        this.isenabledA4 = true;
        break; 
      }
      case 5:
      {
        this.isenabledA1 = true;
        this.isenabledA2 = true;
        this.isenabledA3 = true;
        this.isenabledA4 = true;
        this.isenabledA5 = true;
        break; 
      }
    }
    console.log("he capturado "+this.pack_level_2.length+" ejercicios de Nivel 2");
    switch(this.pack_level_2.length)
    {
      case 1:
      {
        this.isenabledB1 = true;
        break; 
      }
      case 2:
      {
        this.isenabledB1 = true;
        this.isenabledB2 = true;
        break; 
      }
      case 3:
      {
        this.isenabledB1 = true;
        this.isenabledB2 = true;
        this.isenabledB3 = true;
        break; 
      }
      case 4:
      {
        this.isenabledB1 = true;
        this.isenabledB2 = true;
        this.isenabledB3 = true;
        this.isenabledB4 = true;
        break; 
      }
      case 5:
      {
        this.isenabledB1 = true;
        this.isenabledB2 = true;
        this.isenabledB3 = true;
        this.isenabledB4 = true;
        this.isenabledB5 = true;
        break; 
      }
    }
    console.log("he capturado "+this.pack_level_3.length+" ejercicios de Nivel 3");
    switch(this.pack_level_3.length)
    {
      case 1:
      {
        this.isenabledC1 = true;
        break; 
      }
      case 2:
      {
        this.isenabledC1 = true;
        this.isenabledC2 = true;
        break; 
      }
      case 3:
      {
        this.isenabledC1 = true;
        this.isenabledC2 = true;
        this.isenabledC3 = true;
        break; 
      }
      case 4:
      {
        this.isenabledC1 = true;
        this.isenabledC2 = true;
        this.isenabledC3 = true;
        this.isenabledC4 = true;
        break; 
      }
      case 5:
      {
        this.isenabledC1 = true;
        this.isenabledC2 = true;
        this.isenabledC3 = true;
        this.isenabledC4 = true;
        this.isenabledC5 = true;
        break; 
      }
    }

  }
 
  getValue(lvl,ex)
  {
    if(lvl==0)
    {
      this.conn.holdExcercice(this.pack_level_t[ex]);
      switch(this.conn.getSeleccion())
      {
        case 1:
          this.router.navigate(['/ex-fonetic-transcript']);
          break;
        case 2:
          this.router.navigate(['/fonetic']);
          break;
        case 3:
          this.router.navigate(['/grafem']);
          break;
        case 4:
          this.router.navigate(['/sil']);
          break;
        case 5:
          this.router.navigate(['/let']);
          break;
      }    
      
    }
    else if(lvl==1)
    {
      this.conn.holdExcercice(this.pack_level_1[ex]);
      switch(this.conn.getSeleccion())
      {
        case 1:
          this.router.navigate(['/ex-fonetic-transcript']);
          break;
        case 2:
          this.router.navigate(['/fonetic']);
          break;
        case 3:
          this.router.navigate(['/grafem']);
          break;
        case 4:
          this.router.navigate(['/sil']);
          break;
        case 5:
          this.router.navigate(['/let']);
          break;
      }    
    }
    else if(lvl==2)
    {
      this.conn.holdExcercice(this.pack_level_2[ex]);
      switch(this.conn.getSeleccion())
      {
        case 1:
          this.router.navigate(['/ex-fonetic-transcript']);
          break;
        case 2:
          this.router.navigate(['/fonetic']);
          break;
        case 3:
          this.router.navigate(['/grafem']);
          break;
        case 4:
          this.router.navigate(['/sil']);
          break;
        case 5:
          this.router.navigate(['/let']);
          break;
      }    
    }
    else if(lvl==3)
    {
      this.conn.holdExcercice(this.pack_level_3[ex]);
      switch(this.conn.getSeleccion())
      {
        case 1:
          this.router.navigate(['/ex-fonetic-transcript']);
          break;
        case 2:
          this.router.navigate(['/fonetic']);
          break;
        case 3:
          this.router.navigate(['/grafem']);
          break;
        case 4:
          this.router.navigate(['/sil']);
          break;
        case 5:
          this.router.navigate(['/let']);
          break;
      }    
    }
  }

  setter(lvl,ex)
  {

  }

  getTutorial()
  {
    this.requestHeaders = new HttpHeaders().append('Content-Type', 'application/json').append('Accept', 'application/json');
    let datax=JSON.stringify( { SESION: this.conn.session, LEVEL: 0 ,SELECTION: this.conn.getSeleccion()} );

    let login = new Promise((resolve, reject) => {
      this.http.post(this.env.getUrl()+"ListadoEjercicios/getExcerciceSessionLevel", datax,{headers: this.requestHeaders})
      .toPromise()
      .then(async (response) =>
      {
        console.log(response["length"]);
        for(var index in response)
        {
          this.pack_level_t.push(response[index].EJERCICIO_ID);
        }
        await this.conn.presentLoading();
      })
      .catch((error) =>
      {
        console.error('API Error : ', error.status);
        console.error('API Error : ', JSON.stringify(error));
        reject(error.json());
      });
    });
  }

  getLevel1()
  {
    this.requestHeaders = new HttpHeaders().append('Content-Type', 'application/json').append('Accept', 'application/json');
    let datax=JSON.stringify( { SESION: this.conn.getHoldedSession(), LEVEL: 1 ,SELECTION: this.conn.getSeleccion()} );

    let login = new Promise((resolve, reject) => {
      this.http.post(this.env.getUrl()+"ListadoEjercicios/getExcerciceSessionLevel", datax,{headers: this.requestHeaders})
      .toPromise()
      .then(async (response) =>
      {
        console.log(response["length"]);
        for(var index in response)
        {
          this.pack_level_1.push(response[index].EJERCICIO_ID);
          console.log("ex ->"+(response[index].EJERCICIO_ID));
        }
        await this.conn.presentLoading();
      })
      .catch((error) =>
      {
        console.error('API Error : ', error.status);
        console.error('API Error : ', JSON.stringify(error));
        reject(error.json());
      });
    });
  }

  getLevel2()
  {
    this.requestHeaders = new HttpHeaders().append('Content-Type', 'application/json').append('Accept', 'application/json');
    let datax=JSON.stringify( { SESION: this.conn.getHoldedSession(), LEVEL: 2 ,SELECTION: this.conn.getSeleccion()} );

    let login = new Promise((resolve, reject) => {
      this.http.post(this.env.getUrl()+"ListadoEjercicios/getExcerciceSessionLevel", datax,{headers: this.requestHeaders})
      .toPromise()
      .then(async (response) =>
      {
        console.log(response["length"]);
        for(var index in response)
        {
          this.pack_level_2.push(response[index].EJERCICIO_ID);
          console.log("ex ->"+(response[index].EJERCICIO_ID));
        }
        await this.conn.presentLoading();
      })
      .catch((error) =>
      {
        console.error('API Error : no se ha podido obtener el recurso '+error);
      });
    });
  }

  getLevel3()
  {
    this.requestHeaders = new HttpHeaders().append('Content-Type', 'application/json').append('Accept', 'application/json');
    let datax=JSON.stringify( { SESION: this.conn.getHoldedSession(), LEVEL: 3 ,SELECTION: this.conn.getSeleccion()} );

    let login = new Promise((resolve, reject) => {
      this.http.post(this.env.getUrl()+"ListadoEjercicios/getExcerciceSessionLevel", datax,{headers: this.requestHeaders})
      .toPromise()
      .then(async (response) =>
      {
        console.log(response["length"]);
        for(var index in response)
        {
          this.pack_level_3.push(response[index].EJERCICIO_ID);
          console.log("ex ->"+(response[index].EJERCICIO_ID));
          
        }
        await this.conn.presentLoading();
      })
      .catch((error) =>
      {
        console.error('API Error : ', error.status);
        console.error('API Error : ', JSON.stringify(error));
        reject(error.json());
      });
    });
  }

}
