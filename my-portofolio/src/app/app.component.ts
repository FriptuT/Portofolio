import { Component,  ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signupForm: NgForm;

  commentSection = [];

  newFullName = '';
  newMail = '';
  textarea = '';

  

  submitted = false;


  onSubmit() {
    this.submitted = true;
    this.signupForm.reset();
  }

  onAddComment(){
    this.commentSection.push({
      fullname: this.newFullName,
      textarea: this.textarea
    });
  }




}