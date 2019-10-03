import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class ConectorService
{
  
  [x: string]: any;

  url="http://linguapp.club/api/api/";
  requestHeaders: HttpHeaders;
  dataThread:any
  counter:any
  
  constructor(public http:HttpClient) { }
  
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
    let x = time*1000;
    const toast = await this.toastController.create({
      message: mesage,
      duration: x
    });
    toast.present();
  }

  public isset (ref)
  {
     return typeof ref !== 'undefined' 
  }

  public login(user,pass):any
  {
    this.requestHeaders = new HttpHeaders().append('Content-Type', 'application/json').append('Accept', 'application/json');
    let datax=JSON.stringify( { USER: user, PASS: pass } );
    this.http.post(this.url+"Login",datax,{headers: this.requestHeaders}).subscribe(data => {
      this.dataThread=data;
    }, error => {
      console.log(error);
      return false;
    });
    if(this.isset(this.dataThread.length))
    {
      if(this.dataThread.length>0)
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
session:any
  public searchSessionById(param_session):any
  {
    this.http.get(this.url+"Sesiones/"+param_session,{headers: this.requestHeaders}).subscribe(data => {
      this.session=data[0].ID;
      console.log(this.session);
    }, error => {
      console.log(error);
    });

  }

session_data:any
  public sessionHolder(data):any
  {
    this.session_data=data;
  }
  
  public getHoldedSession():any
  {
    return this.session;
  }

  seleccion:any
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

  level:any
  excercise:any
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

}
