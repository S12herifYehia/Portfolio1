import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import {ReactiveFormsModule} from '@angular/forms';
// import {ToastrServices} from 'ngx-toastr';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    ToastrModule

  ]
})
export class ContactModule { }
