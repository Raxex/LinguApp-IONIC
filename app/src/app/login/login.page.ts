import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { ConectorService } from '../conector.service';
import { Router } from '@angular/router';
import { sync } from 'glob';
import { ToastController } from '@ionic/angular';
import { WebDriverLogger } from 'blocking-proxy/built/lib/webdriver_logger';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnviromentService } from '../enviroment.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  requestHeaders: any;

  constructor(public env:EnviromentService ,public conn:ConectorService,private router: Router,public http:HttpClient,public toastController: ToastController) { }

  ngOnInit() {
  }

  
  user:any
  pass:any
  data:any

  login()
  {
    this.requestHeaders = new HttpHeaders().append('Content-Type', 'application/json').append('Accept', 'application/json');
    let datax=JSON.stringify( { USER: this.user, PASS: this.pass } );
    let res;
    let login = new Promise((resolve, reject) => {
      this.http.post(this.env.getUrl()+"Login", datax,{headers: this.requestHeaders})
      .toPromise()
      .then(async (response) =>
      {
        res = response[0];
        await this.conn.presentLoading();
        console.log(response);
        if(response)
        {
          if(response[0]["ACTIVO"]==0)
          {
            this.conn.presentToast("Estas bloqueado del sistema, contacta al administrador",2);
          }
          else if(response[0]["ACTIVO"]==1)
          {
            this.conn.presentToast("Bienvenid@ "+response[0]["NOMBRE"]+" !",2);
            this.router.navigate(['/inicio']);
          }
        }
        else
        {
          if(response[length]>0)
          {
            this.conn.presentToast("No has podido Logearte :c",2);
          }
        }
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
