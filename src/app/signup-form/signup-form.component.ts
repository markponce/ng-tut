import { UsernameValidators } from './username.validators';
import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({
    username: new FormControl('',[
      // Validators.required,
      // Validators.minLength(3),
      // UsernameValidators.cannotContainSpace,
    ],UsernameValidators.shouldBeUnique ),
    password: new FormControl('', Validators.required)
  });

  get username() {
    let username = this.form.get('username');
    // console.log(username);
    return username;
  }

  get password() {
    return this.form.get('password');
  }

  login() {
    // alert(123);
    // console.log(123);
    // alert(123);
    // let isValid = autService.lig(this.form.value);
    let isValid = true;
    if(isValid) { 
      this.form.setErrors({invalidLogin: true});
    }
  }


}
