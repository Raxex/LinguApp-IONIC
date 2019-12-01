import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviromentService
{

  public url = "http://linguapp.cl/APIConnect/api/";

  public file_url = "http://www.linguapp.cl/Pagina%20admin/";
  constructor()
  { 

  }
 

  getUrl()
  {
    return this.url;
  }
}
