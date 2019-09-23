import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router)
  {
    (async () => { 
      // Do something before delay
      console.log('delaying...');
  
      await this.delay(2000);
      console.log('redirecting...');
      this.router.navigate(['/lingu-logo']);
  })();
    
   
  }
  delay(ms: number)
  {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  
}
