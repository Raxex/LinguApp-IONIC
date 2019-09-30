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
  constructor(public conn:ConectorService,private router: Router,public toastController: ToastController)
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
}
