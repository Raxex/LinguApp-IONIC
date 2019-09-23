import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lingu-logo',
  templateUrl: './lingu-logo.page.html',
  styleUrls: ['./lingu-logo.page.scss'],
})
export class LinguLogoPage implements OnInit {
  constructor(private router: Router)
  {
    (async () => { 
      // Do something before delay
      console.log('delaying...');
  
      await this.delay(2000);
      console.log('redirecting...');
      this.router.navigate(['/login']);
  })();
    
   
  }
  delay(ms: number)
  {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  
  ngOnInit() {
  }

}
