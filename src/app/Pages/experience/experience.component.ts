import { Component } from '@angular/core';

import Aos from 'aos';
import 'aos/dist/aos.css'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {




  ngOnInit(){
    Aos.init({
      duration:800,
      offset:200,
      once:false,
      easing: 'ease-in-out',
    })
  }
}
