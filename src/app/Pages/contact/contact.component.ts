import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
// import emailjs from 'emailjs-com';


import Aos from 'aos';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  Yessend=false;


  FormData:any;
  toastr:ToastrService=inject(ToastrService)

  fb:FormBuilder=inject(FormBuilder);
  cdRef: ChangeDetectorRef = inject(ChangeDetectorRef);



  ngOnInit(){
    this.FormData=this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.email,Validators.required]],
      msg:['',[Validators.required,Validators.minLength(10)]]
    })


        Aos.init({
          duration:800,
          offset:200,
          once:false,
          
        })

  }



  onSubmit(){
    if(this.FormData.valid){
      const templateParams = {
        from_name: this.FormData.get('name').value,  // الاسم المرسل
        to_name: 'Sherif Yehia',  // الاسم المستقبل (يمكن تخصيصه)
        message: this.FormData.get('msg').value,  // محتوى الرسالة
        email: this.FormData.get('email').value  // البريد الإلكتروني للرد
      };

      emailjs.send('service_nzmgtdp','template_41xwhgv',templateParams,'HDnAYnwoKm--MaYs-').then((response) => {
        // عرض رسالة نجاح عند إرسال البريد
        this.toastr.success('Your message has been sent successfully!', 'Success');
      })
      .catch((error) => {
        // عرض رسالة خطأ إذا فشل إرسال البريد
        this.toastr.error('There was an error sending your message.', 'Error');
      }).finally(() => {

        this.cdRef.detectChanges();
        this.FormData.reset();
      });;
    }


    // else{
    //   this.toastr.error('Please fill all required fields correctly.', 'Error');
    //   // this.cdRef.detectChanges();
    // }

  }
}
