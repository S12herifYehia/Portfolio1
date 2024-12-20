import { Component } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {






  ngAfterViewInit(){
    AOS.refresh();
  }
}
