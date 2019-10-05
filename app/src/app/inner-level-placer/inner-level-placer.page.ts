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
  
  isenabledT1:false //Tutorial 2
  isenabledT2:false //Tutorial 3
  isenabledT3:false //Tutorial 4
  isenabledT4:false //Tutorial 5

  isenabledA1:false //Nivel 1 - Ejercicio 2
  isenabledA2:false //Nivel 1 - Ejercicio 3
  isenabledA3:false //Nivel 1 - Ejercicio 4
  isenabledA4:false //Nivel 1 - Ejercicio 5

  isenabledB1:false //Nivel 2 - Ejercicio 2
  isenabledB2:false //Nivel 2 - Ejercicio 3
  isenabledB3:false //Nivel 2 - Ejercicio 4
  isenabledB4:false //Nivel 2 - Ejercicio 5
  
  isenabledC1:false //Nivel 3 - Ejercicio 2
  isenabledC2:false //Nivel 3 - Ejercicio 
  isenabledC3:false //Nivel 3 - Ejercicio 4
  isenabledC4:false //Nivel 3 - Ejercicio 5
  
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
