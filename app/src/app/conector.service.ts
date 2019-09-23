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
}
