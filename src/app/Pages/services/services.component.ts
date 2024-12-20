import { Component } from '@angular/core';
import Aos from 'aos';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {



  ngOnInit(){
      Aos.init({
        duration:800,
        offset:200,
        once:false,
        // easing: 'ease-in-out',
        delay:0
      })
    }
}
