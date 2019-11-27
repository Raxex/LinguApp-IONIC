import { Component, OnInit } from '@angular/core';
import { ConectorService } from '../conector.service';
import { Router } from '@angular/router';
import { sync } from 'glob';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { WebDriverLogger } from 'blocking-proxy/built/lib/webdriver_logger';
import { EnviromentService } from '../enviroment.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-session-code',
  templateUrl: './session-code.page.html',
  styleUrls: ['./session-code.page.scss'],
})
export class SessionCodePage implements OnInit {

  constructor(public env:EnviromentService,public conn:ConectorService,public http:HttpClient,private router: Router,public toastController: ToastController) { }
  requestHeaders: HttpHeaders;
  session_id:any
  ngOnInit() {
  }
  async busqueda()
  {
    if(this.session_id === undefined)
    {
      this.conn.presentToast("No has ingresado nada",2);
    }
    else
    {
      this.requestHeaders = new HttpHeaders().append('Content-Type', 'application/json').append('Accept', 'application/json');
      this.http.get(this.env.getUrl()+"Sesiones/"+this.session_id,{headers: this.requestHeaders}).subscribe(async data => {
        await this.conn.presentLoading();
        if(data[0] === undefined)
        {
          this.conn.presentToast("no se han encontrado sesiones con ese codigo",3);
          this.conn.session = null;
          return this.conn.session;
        }
        else
        {
          this.conn.session = data[0].ID;
          if(this.conn.session !== undefined )
          {
            console.log(this.conn.session);
            this.router.navigate(['/level-placer']);
          }
        }
      }, error => {
        console.log(error);
      });
    }
  }

}
