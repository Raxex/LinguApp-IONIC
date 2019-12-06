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
  selector: 'app-enroll',
  templateUrl: './enroll.page.html',
  styleUrls: ['./enroll.page.scss'],
})
export class EnrollPage implements OnInit {
  requestHeaders: HttpHeaders;
  user: any;

  constructor(public env:EnviromentService ,public conn:ConectorService,private router: Router,public http:HttpClient,public toastController: ToastController) { }

  ngOnInit() {
  }
rut:any
name:any
pass:any
v_pass:any
sur_name:any
email:any
  do_enroll()
  {
    if(this.pass == this.v_pass)
    {
      this.requestHeaders = new HttpHeaders().append('Content-Type', 'application/json').append('Accept', 'application/json');
      let datax=JSON.stringify( {RUT:this.rut,NOMBRE:this.name,APELLIDO:this.sur_name,EMAIL:this.email,CONTRASENA:this.pass,SANTOTOMAS:22,TIPO_PERSONA:1} );
      let res;
      let login = new Promise((resolve, reject) => {

        this.http.post(this.env.getUrl()+"Usuarios", datax,{headers: this.requestHeaders})
        .toPromise()
        .then(async (response) =>
        {
          if(response == "ya existe")
          {
            this.conn.presentToast("El usuario ya se encuentra en el sistema. favor contactar a administrador",3);
          }
          else if(response == "done")
          {
            this.conn.presentToast("Usuario añadido con exito!",3);
            this.router.navigate(['/login']);
          }
        })
        .catch((error) =>
        {
          console.error('API Error : ', error.status);
          console.error('API Error : ', JSON.stringify(error));
          //reject(error.json());
        });
      });
    }
    else
    {
      this.conn.presentToast("Las contraseñas no coinciden",3);
    }
  }
    
}