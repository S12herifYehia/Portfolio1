import { Component } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {


  ngOnInit(){


    if (typeof window !== 'undefined') {
      Aos.init({
        // duration:800,
        // easing: 'ease-in-out', // نوع الحركة
        // once: false

        duration: 500, // مدة الحركة
        offset: 200,    // المسافة قبل بدء التأثير
        easing: 'ease-in-out', // نوع الحركة
        once: true,
        delay:0,

      })
    }

  }

}
