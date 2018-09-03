import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-bootstrap-demo';
  @ViewChild('f') signUpForm: NgForm;  // Store vriable name Signupform

  // onSubmit = function(f: NgForm) {
  //   console.log(f); // This is the Form element but this is not javascript object we want

  // };

  onSubmit = function() {
    console.log(this.signUpForm);
  };
}
