import { Component, OnInit } from '@angular/core';
import { ConectorService } from '../conector.service';
import { Router } from '@angular/router';
import { sync } from 'glob';
import { ToastController } from '@ionic/angular';
import { WebDriverLogger } from 'blocking-proxy/built/lib/webdriver_logger';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public conn:ConectorService,private router: Router,public toastController: ToastController) { }

  ngOnInit() {
  }

  
  user:any
  pass:any
  data:any

  async login()
  {
    this.conn.presentToast("logueando",2);
    this.data= this.conn.login(this.user,this.pass);
    this.conn.presentToast("Cargando",0.5);
    this.conn.presentToast("Cargando.",0.5);
    this.conn.presentToast("Cargando..",0.5);
    this.conn.presentToast("Cargando...",0.5);
    console.log("ya capture los datos");
    this.conn.wait(3);
    console.log("estoy haciendo el wait");
    if(this.data==true)
    {
      this.router.navigate(['/inicio']);
    }
    else
    {
      this.conn.presentToast("No has podido Logearte :c",2);
    }
  }

  
}
