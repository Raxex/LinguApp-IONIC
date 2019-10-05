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
  
  isenabledT1:boolean = false; //Tutorial 2
  isenabledT2:boolean = false; //Tutorial 3
  isenabledT3:boolean = false; //Tutorial 4
  isenabledT4:boolean = false; //Tutorial 5

  isenabledA1:boolean = false; //Nivel 1 - Ejercicio 2
  isenabledA2:boolean = false; //Nivel 1 - Ejercicio 3
  isenabledA3:boolean = false; //Nivel 1 - Ejercicio 4
  isenabledA4:boolean = false; //Nivel 1 - Ejercicio 5

  isenabledB1:boolean = false; //Nivel 2 - Ejercicio 2
  isenabledB2:boolean = false; //Nivel 2 - Ejercicio 3
  isenabledB3:boolean = false; //Nivel 2 - Ejercicio 4
  isenabledB4:boolean = false; //Nivel 2 - Ejercicio 5
  
  isenabledC1:boolean = false; //Nivel 3 - Ejercicio 2
  isenabledC2:boolean = false; //Nivel 3 - Ejercicio 
  isenabledC3:boolean = false; //Nivel 3 - Ejercicio 4
  isenabledC4:boolean = false; //Nivel 3 - Ejercicio 5
  
  ngOnInit() {
  }

  getLastExcercice(last)
  {
    switch (last) {
      case "T2":
        this.isenabledT2=true;
      break;
      case "T3":
        this.isenabledT2=true;
        this.isenabledT3=true;
      break;
      case "T4":
        this.isenabledT2=true;
        this.isenabledT3=true;
        this.isenabledT4=true;
      break;
      
      case "A1":
        this.isenabledT2=true;
        this.isenabledT3=true;
        this.isenabledT4=true;

        this.isenabledA1=true;
      break;
      case "A2":
        this.isenabledT2=true;
        this.isenabledT3=true;
        this.isenabledT4=true;

        this.isenabledA1=true;
        this.isenabledA2=true;
      break;
      case "A3":
        this.isenabledT2=true;
        this.isenabledT3=true;
        this.isenabledT4=true;

        this.isenabledA1=true;
        this.isenabledA2=true;
        this.isenabledA3=true;
      break;
      case "A4":
        this.isenabledT2=true;
        this.isenabledT3=true;
        this.isenabledT4=true;

        this.isenabledA1=true;
        this.isenabledA2=true;
        this.isenabledA3=true;
        this.isenabledA4=true;
      break;
      case "B1":
        this.isenabledT2=true;
        this.isenabledT3=true;
        this.isenabledT4=true;

        this.isenabledA1=true;
        this.isenabledA2=true;
        this.isenabledA3=true;
        this.isenabledA4=true;
      
        this.isenabledB1=true;
      break;
      case "B2":
        this.isenabledT2=true;
        this.isenabledT3=true;
        this.isenabledT4=true;

        this.isenabledA1=true;
        this.isenabledA2=true;
        this.isenabledA3=true;
        this.isenabledA4=true;
      
        this.isenabledB1=true;
        this.isenabledB2=true;
      break;
      case "B3":
        this.isenabledT2=true;
        this.isenabledT3=true;
        this.isenabledT4=true;

        this.isenabledA1=true;
        this.isenabledA2=true;
        this.isenabledA3=true;
        this.isenabledA4=true;
      
        this.isenabledB1=true;
        this.isenabledB2=true;
        this.isenabledB3=true;
      break;
      case "B4":
        this.isenabledT2=true;
        this.isenabledT3=true;
        this.isenabledT4=true;

        this.isenabledA1=true;
        this.isenabledA2=true;
        this.isenabledA3=true;
        this.isenabledA4=true;
      
        this.isenabledB1=true;
        this.isenabledB2=true;
        this.isenabledB3=true;
        this.isenabledB4=true;
      break;
      case "C1":
        this.isenabledT2=true;
        this.isenabledT3=true;
        this.isenabledT4=true;

        this.isenabledA1=true;
        this.isenabledA2=true;
        this.isenabledA3=true;
        this.isenabledA4=true;
      
        this.isenabledB1=true;
        this.isenabledB2=true;
        this.isenabledB3=true;
        this.isenabledB4=true;
      
        this.isenabledC1=true;
      break;
      case "C2":
        this.isenabledT2=true;
        this.isenabledT3=true;
        this.isenabledT4=true;

        this.isenabledA1=true;
        this.isenabledA2=true;
        this.isenabledA3=true;
        this.isenabledA4=true;
      
        this.isenabledB1=true;
        this.isenabledB2=true;
        this.isenabledB3=true;
        this.isenabledB4=true;
      
        this.isenabledC1=true;
        this.isenabledC2=true;
      break;
      case "C3":
        this.isenabledT2=true;
        this.isenabledT3=true;
        this.isenabledT4=true;

        this.isenabledA1=true;
        this.isenabledA2=true;
        this.isenabledA3=true;
        this.isenabledA4=true;
      
        this.isenabledB1=true;
        this.isenabledB2=true;
        this.isenabledB3=true;
        this.isenabledB4=true;
      
        this.isenabledC1=true;
        this.isenabledC2=true;
        this.isenabledC3=true;
      break;
      case "C4":
        this.isenabledT2=true;
        this.isenabledT3=true;
        this.isenabledT4=true;

        this.isenabledA1=true;
        this.isenabledA2=true;
        this.isenabledA3=true;
        this.isenabledA4=true;
      
        this.isenabledB1=true;
        this.isenabledB2=true;
        this.isenabledB3=true;
        this.isenabledB4=true;
      
        this.isenabledC1=true;
        this.isenabledC2=true;
        this.isenabledC3=true;
        this.isenabledC4=true;
      break;
    }
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
