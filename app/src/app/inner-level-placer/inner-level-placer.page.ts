import { Component, OnInit } from '@angular/core';
import { ConectorService } from '../conector.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inner-level-placer',
  templateUrl: './inner-level-placer.page.html',
  styleUrls: ['./inner-level-placer.page.scss'],
})
export class InnerLevelPlacerPage implements OnInit {

  constructor(public conn:ConectorService,private router: Router,public toastController: ToastController) { }

  ngOnInit() {
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
    this.conn.setLevel(lvl);
    this.conn.setExcercise(ex);
    if(this.conn.getSeleccion()==1)
    {
      this.router.navigate(['/ex-fonetic-transcript']);
    }
  }
}
