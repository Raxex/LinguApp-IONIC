import { Component, OnInit } from '@angular/core';
import { ConectorService } from '../conector.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-level-placer',
  templateUrl: './level-placer.page.html',
  styleUrls: ['./level-placer.page.scss'],
})
export class LevelPlacerPage implements OnInit {

  session_id:any
  constructor(public conn:ConectorService,private router: Router,public toastController: ToastController) {
     this.session_id=this.conn.getHoldedSession();
     console.log(this.session_id);
   }

  ngOnInit() {
  }

}
