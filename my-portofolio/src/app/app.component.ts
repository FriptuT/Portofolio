import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
 signupForm: FormGroup;

 ngOnInit() {
   this.signupForm = new FormGroup({
     'username': new FormControl(null, Validators.required),
     'email': new FormControl(null, [Validators.required, Validators.email]),
     'textzone': new FormControl(null, Validators.required)
   });
 }

 onSubmit(){
   console.log(this.signupForm.value);
   this.signupForm.reset();
 }
}
