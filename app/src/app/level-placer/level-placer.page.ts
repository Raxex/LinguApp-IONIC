import { Component, OnInit } from '@angular/core';
import { ConectorService } from '../conector.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnviromentService } from '../enviroment.service';

@Component({
  selector: 'app-level-placer',
  templateUrl: './level-placer.page.html',
  styleUrls: ['./level-placer.page.scss'],
})
export class LevelPlacerPage implements OnInit {

  session_id:any
  requestHeaders: HttpHeaders;
  url: string;
  constructor(public env:EnviromentService,public conn:ConectorService,private router: Router,public toastController: ToastController,public http:HttpClient)
  {
     this.session_id = this.conn.getHoldedSession();
     
   }

  ngOnInit() {
  }
  transcription()
  {
    //Transcripcion
    this.conn.setSeleccion(1);
    this.changeLevel();
  }
  fone()
  {
    //Fonemas
    this.conn.setSeleccion(2);
    this.changeLevel();
  }
  grafe()
  {
    //Grafemas
    this.conn.setSeleccion(3);
    this.changeLevel();
  }
  sil()
  {
    //Silabas
    this.conn.setSeleccion(4);
    this.changeLevel();
  }
  letter()
  {
    //Letras
    this.conn.setSeleccion(5);
    this.changeLevel();
  }
  changeLevel()
  {
    console.log(this.conn.getSeleccion());
    this.router.navigate(['/inner-level-placer']);
  }
  getTutorial()
  {
    this.requestHeaders = new HttpHeaders().append('Content-Type', 'application/json').append('Accept', 'application/json');
    let datax=JSON.stringify( { SESION: this.conn.getHoldedSession(), LEVEL: 0 } );

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
