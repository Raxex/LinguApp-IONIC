import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviromentService
{

  public url = "http://linguapp.cl/APIConnect/api/";

  constructor()
  { 

  }

  getUrl()
  {
    return this.url;
  }
}
