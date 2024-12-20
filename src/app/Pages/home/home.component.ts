import { Component, ViewChild } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {



  ngOnInit(){

    if (typeof window !== 'undefined') {

        AOS.init({
          duration: 1200, // مدة الحركة
          offset: 200,    // المسافة قبل بدء التأثير
          easing: 'ease-in-out', // نوع الحركة
          once: true,
          delay:2000,
        })
        ;
  
    }

  }

}
