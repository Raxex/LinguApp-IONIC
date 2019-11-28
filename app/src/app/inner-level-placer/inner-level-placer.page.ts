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
  
  pack_level_t:any
  pack_level_1:any
  pack_level_2:any
  pack_level_3:any
  

  constructor(public env:EnviromentService,public conn:ConectorService,private router: Router,public toastController: ToastController,public http:HttpClient)
  { 
    //this.getTutorial();
    let user          = this.conn.getUserID();
    let session       = this.conn.getHoldedSession();
    // this.pack_level_t = this.getTutorial();
    // this.pack_level_1 = this.getLevel1(); 
    this.pack_level_2 = this.getLevel2();
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

  isenabledA1:boolean = false; //Nivel 1 - Ejercicio 2
  isenabledA2:boolean = false; //Nivel 1 - Ejercicio 3
  isenabledA3:boolean = false; //Nivel 1 - Ejercicio 4
  isenabledA4:boolean = false; //Nivel 1 - Ejercicio 5

  isenabledB1:boolean = false; //Nivel 2 - Ejercicio 2
  isenabledB2:boolean = false; //Nivel 2 - Ejercicio 3
  isenabledB3:boolean = false; //Nivel 2 - Ejercicio 4
  isenabledB4:boolean = false; //Nivel 2 - Ejercicio 5
  
  isenabledC1:boolean = false; //Nivel 3 - Ejercicio 2
  isenabledC2:boolean = false; //Nivel 3 - Ejercicio 
  isenabledC3:boolean = false; //Nivel 3 - Ejercicio 4
  isenabledC4:boolean = false; //Nivel 3 - Ejercicio 5

  requestHeaders:any 

  ngOnInit()
  {
    
  }
 
  getLastExcercice(last)
  {
    switch (last) {
      case "T2":
        this.isenabledT1 = true;
        this.isenabledT2 = true;
      break;
      case "T3":
        this.isenabledT1 = true;
        this.isenabledT2 = true;
        this.isenabledT3 = true;
      break;
      case "T4":
        this.isenabledT1 = true;
        this.isenabledT2 = true;
        this.isenabledT3 = true;
        this.isenabledT4 = true;
      break;
      case "A1":
        this.isenabledT1 = true;
        this.isenabledT2 = true;
        this.isenabledT3 = true;
        this.isenabledT4 = true;
      break;
      case "A2":
        this.isenabledT1 = true;
        this.isenabledT2 = true;
        this.isenabledT3 = true;
        this.isenabledT4 = true;

        this.isenabledA1 = true;
        this.isenabledA2 = true;
      break;
      case "A3":
        this.isenabledT1 = true;
        this.isenabledT2 = true;
        this.isenabledT3 = true;
        this.isenabledT4 = true;

        this.isenabledA1 = true;
        this.isenabledA2 = true;
        this.isenabledA3 = true;
      break;
      case "A4":
        this.isenabledT1 = true;
        this.isenabledT2 = true;
        this.isenabledT3 = true;
        this.isenabledT4 = true;

        this.isenabledA1 = true;
        this.isenabledA2 = true;
        this.isenabledA3 = true;
        this.isenabledA4 = true;
      break;
      case "B1":
        this.isenabledT1 = true;
        this.isenabledT2 = true;
        this.isenabledT3 = true;
        this.isenabledT4 = true;

        this.isenabledA1 = true;
        this.isenabledA2 = true;
        this.isenabledA3 = true;
        this.isenabledA4 = true;
      
        this.isenabledB1 = true;
      break;
      case "B2":
        this.isenabledT1 = true;
        this.isenabledT2 = true;
        this.isenabledT3 = true;
        this.isenabledT4 = true;

        this.isenabledA1 = true;
        this.isenabledA2 = true;
        this.isenabledA3 = true;
        this.isenabledA4 = true;
      
        this.isenabledB1 = true;
        this.isenabledB2 = true;
      break;
      case "B3":
        this.isenabledT1 = true;
        this.isenabledT2 = true;
        this.isenabledT3 = true;
        this.isenabledT4 = true;

        this.isenabledA1 = true;
        this.isenabledA2 = true;
        this.isenabledA3 = true;
        this.isenabledA4 = true;
      
        this.isenabledB1 = true;
        this.isenabledB2 = true;
        this.isenabledB3 = true;
      break;
      case "B4":
        this.isenabledT1 = true;
        this.isenabledT2 = true;
        this.isenabledT3 = true;
        this.isenabledT4 = true;

        this.isenabledA1 = true;
        this.isenabledA2 = true;
        this.isenabledA3 = true;
        this.isenabledA4 = true;
      
        this.isenabledB1 = true;
        this.isenabledB2 = true;
        this.isenabledB3 = true;
        this.isenabledB4 = true;
      break;
      case "C1":
        this.isenabledT1 = true;
        this.isenabledT2 = true;
        this.isenabledT3 = true;
        this.isenabledT4 = true;

        this.isenabledA1 = true;
        this.isenabledA2 = true;
        this.isenabledA3 = true;
        this.isenabledA4 = true;
      
        this.isenabledB1 = true;
        this.isenabledB2 = true;
        this.isenabledB3 = true;
        this.isenabledB4 = true;
      
        this.isenabledC1 = true;
      break;
      case "C2":
        this.isenabledT1 = true;
        this.isenabledT2 = true;
        this.isenabledT3 = true;
        this.isenabledT4 = true;

        this.isenabledA1 = true;
        this.isenabledA2 = true;
        this.isenabledA3 = true;
        this.isenabledA4 = true;
      
        this.isenabledB1 = true;
        this.isenabledB2 = true;
        this.isenabledB3 = true;
        this.isenabledB4 = true;
      
        this.isenabledC1 = true;
        this.isenabledC2 = true;
      break;
      case "C3":
        this.isenabledT1 = true;
        this.isenabledT2 = true;
        this.isenabledT3 = true;
        this.isenabledT4 = true;

        this.isenabledA1 = true;
        this.isenabledA2 = true;
        this.isenabledA3 = true;
        this.isenabledA4 = true;
      
        this.isenabledB1 = true;
        this.isenabledB2 = true;
        this.isenabledB3 = true;
        this.isenabledB4 = true;
      
        this.isenabledC1 = true;
        this.isenabledC2 = true;
        this.isenabledC3 = true;
      break;
      case "C4":
        this.isenabledT1 = true;
        this.isenabledT2 = true;
        this.isenabledT3 = true;
        this.isenabledT4 = true;

        this.isenabledA1 = true;
        this.isenabledA2 = true;
        this.isenabledA3 = true;
        this.isenabledA4 = true;
      
        this.isenabledB1 = true;
        this.isenabledB2 = true;
        this.isenabledB3 = true;
        this.isenabledB4 = true;
      
        this.isenabledC1 = true;
        this.isenabledC2 = true;
        this.isenabledC3 = true;
        this.isenabledC4 = true;
      break;
    }
  }
 
  getValue(lvl,ex)
  {
    if(lvl==0)
    {
      this.setter(lvl,ex);
    }
    else if(lvl==1)
    {
      this.setter(lvl,ex);
    }
    else if(lvl==2)
    {
      this.setter(lvl,ex);
    }
    else if(lvl==3)
    {
      this.setter(lvl,ex);
    }
  }

  setter(lvl,ex)
  {
    
  }

  getTutorial()
  {
    this.requestHeaders = new HttpHeaders().append('Content-Type', 'application/json').append('Accept', 'application/json');
    let datax=JSON.stringify( { SESION: this.conn.session, LEVEL: 0 } );

    let login = new Promise((resolve, reject) => {
      this.http.post(this.env.getUrl()+"ListadoEjercicios/getExcerciceSessionLevel", datax,{headers: this.requestHeaders})
      .toPromise()
      .then(async (response) =>
      {
        
        for(let i = 0; i < response[length]; i++)
        {
          console.log(response[i]["EJERCICIO_ID"]);
        }
        let res = response[0];
        await this.conn.presentLoading();
        console.log(response[length]);
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
    let datax=JSON.stringify( { SESION: this.conn.getHoldedSession(), LEVEL: 1 } );

    let login = new Promise((resolve, reject) => {
      this.http.post(this.env.getUrl()+"ListadoEjercicios/getExcerciceSessionLevel", datax,{headers: this.requestHeaders})
      .toPromise()
      .then(async (response) =>
      {
        let res = response[0];
        await this.conn.presentLoading();
        console.log(response);
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
    let datax=JSON.stringify( { SESION: this.conn.getHoldedSession(), LEVEL: 2 } );

    let login = new Promise((resolve, reject) => {
      this.http.post(this.env.getUrl()+"ListadoEjercicios/getExcerciceSessionLevel", datax,{headers: this.requestHeaders})
      .toPromise()
      .then(async (response) =>
      {
        console.log(response[length]);
        for(let i = 0; i < response[length]; i++)
        {
          console.log(response[i].EJERCICIO_ID);
        }
        let res = response[0];
        await this.conn.presentLoading();
        console.log(response[length]);
      })
      .catch((error) =>
      {
        console.error('API Error : ', error.status);
        console.error('API Error : ', JSON.stringify(error));
        reject(error.json());
      });
    });
  }

  getLevel3()
  {
    this.requestHeaders = new HttpHeaders().append('Content-Type', 'application/json').append('Accept', 'application/json');
    let datax=JSON.stringify( { SESION: this.conn.getHoldedSession(), LEVEL: 3 } );

    let login = new Promise((resolve, reject) => {
      this.http.post(this.env.getUrl()+"ListadoEjercicios/getExcerciceSessionLevel", datax,{headers: this.requestHeaders})
      .toPromise()
      .then(async (response) =>
      {
        let res = response[0];
        await this.conn.presentLoading();
        console.log(response);
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
