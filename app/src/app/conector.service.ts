import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Injectable({providedIn: 'root'})

export class ConectorService
{
  
  [x: string]: any;
  url="http://linguapp.club/api/api/";
  requestHeaders: HttpHeaders;
  dataThread:any
  counter:any
  session:any
  level:any
  excercise:any
  seleccion:any
  session_data:any
  user_id:any
  lastEx:any
  
  constructor(public http:HttpClient,public toastController: ToastController) { }
  
  public wait(ms)
  {
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms)
    {
      end = new Date().getTime();
    }
  }

  async presentToast(mesage,time)
  {
    let x = time * 1000;
    const toast = await this.toastController.create({message: mesage,duration: x});
    toast.present();
  }

  public isset (ref)
  {
     return typeof ref !== 'undefined' 
  }

  public lsogin(user,pass):any
  {
    this.requestHeaders = new HttpHeaders().append('Content-Type', 'application/json').append('Accept', 'application/json');
    let datax=JSON.stringify( { USER: user, PASS: pass } );
    
    this.http.post(this.url+"Login",datax,{headers: this.requestHeaders}).subscribe(data => {
      this.dataThread=data;
      this.user_id = this.dataThread[0]['ID'];
      return true;
    }, error => {
      console.log(error);
      return false;
    });
    
  }

  public login(user,pass)
  {
    this.requestHeaders = new HttpHeaders().append('Content-Type', 'application/json').append('Accept', 'application/json');
    let datax=JSON.stringify( { USER: user, PASS: pass } );
    let res;
    let login = new Promise((resolve, reject) => {
      this.http.post(this.url+"Login", datax,{headers: this.requestHeaders})
      .toPromise()
      .then((response) =>
      {
        res = response[0];
        console.log(response);
        if(response[length]>0)
        {
          return true;
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
  doreturn()
  {
    return true;
  }
  public searchSessionById(param_session):any
  {
    this.http.get(this.url+"Sesiones/"+param_session,{headers: this.requestHeaders}).subscribe(data => {
      this.session=data[0].ID;
      console.log(this.session);
    }, error => {
      console.log(error);
    });
  }

  public getLastEx(user,session)
  {
    this.requestHeaders = new HttpHeaders().append('Content-Type', 'application/json').append('Accept', 'application/json');
    let datax=JSON.stringify( { USUARIO_ID: user, SESION_ID: session } );
    this.http.post(this.url+"getLastEx",datax,{headers: this.requestHeaders}).subscribe(data => {
      this.lastEx=data[0].ULTIMO_EJERCICIO;
      
    }, error => {
      console.log(error);
      return false;
    });
  }

  public sessionHolder(data):any
  {
    this.session_data=data;
  }
  
  public getHoldedSession():any
  {
    return this.session;
  }

  setSeleccion(param_seleccion)
  { 
    // Transcripcion = 1
    // Fonemas       = 2
    // Grafemas      = 3
    // Silabas       = 4
    // Letras        = 5
    this.seleccion = param_seleccion;
  }

  getSeleccion()
  {
    return this.seleccion;
  }

  setLevel(level)
  {
    this.level=level;
  }

  setExcercise(ex)
  {
    this.excercise=ex;
  }

  getLevel()
  {
    return this.level;
  }
  
  getExcercise()
  {
    return this.excercise;
  }
  getUserID()
  {
    return this.user_id;
  }

  getLastExercice()
  {
    return this.lastEx;
  }

  letterChosser()
  {
    
  }

  lista_de_ejercicios:any

  getLista_de_ejercicios()
  {
    return this.lista_de_ejercicios;
  }

  setLista_de_ejercicios(item)
  {
    this.lista_de_ejercicios = item ;
  }

  ex_list:any
  prefix_ex_list(session,level)
  {
    this.requestHeaders = new HttpHeaders().append('Content-Type', 'application/json').append('Accept', 'application/json');
    let datax=JSON.stringify( { SESION: session, LEVEL: level } );
    
    this.http.post(this.url+"ListadoEjercicios/getExcerciceSessionLevel",datax,{headers: this.requestHeaders}).subscribe(data => {
      this.ex_list=data;
    }, error => {
      console.log(error);
      return false;
    });
    return this.ex_list;
  }

  async presentLoading()
  {
    const loading     = document.createElement('ion-loading');
    loading.message   = 'Cargando';
    loading.duration  = 3000;
  
    document.body.appendChild(loading);
    await loading.present();
    
    const { role, data } = await loading.onDidDismiss();
    return true;
  }
  
  retry()
  {
    if(this.isset(this.user_id))
    {
      if(this.user_id)
        {
          return true;
        }
        else
        {
          return false;
        }
    }
    else
    {
      return false;
    }
  }
}