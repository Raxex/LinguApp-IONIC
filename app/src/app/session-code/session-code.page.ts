import { Component, OnInit } from '@angular/core';
import { ConectorService } from '../conector.service';
import { Router } from '@angular/router';
import { sync } from 'glob';
import { ToastController } from '@ionic/angular';
import { WebDriverLogger } from 'blocking-proxy/built/lib/webdriver_logger';
@Component({
  selector: 'app-session-code',
  templateUrl: './session-code.page.html',
  styleUrls: ['./session-code.page.scss'],
})
export class SessionCodePage implements OnInit {

  constructor(public conn:ConectorService,private router: Router,public toastController: ToastController) { }

  session_id:any
  ngOnInit() {
  }
  busqueda()
  {
    if(this.session_id==null)
    {
      this.conn.presentToast("No has ingresado nada",2);
    }
    else
    {
      this.conn.sessionHolder(this.conn.searchSessionById(this.session_id));
      this.router.navigate(['/level-placer']);
    }
    
  }

}
