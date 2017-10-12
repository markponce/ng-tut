import { UsernameValidators } from './../signup-form/username.validators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})
export class NestedFormComponent implements OnInit {
  form = new FormGroup({
    account : new FormGroup({
      username: new FormControl('',[
        // Validators.required,
        // Validators.minLength(3),
        // UsernameValidators.cannotContainSpace,
      ],UsernameValidators.shouldBeUnique ),
      password: new FormControl('', Validators.required)
    })

  });

  constructor() { }
  
    ngOnInit() {
    }

  get username() {
    let username = this.form.get('account.username');
    // console.log(username);
    return username;
  }

  // get password() {
  //   return this.form.get('password');
  // }

  // login() {
  //   // alert(123);
  //   // console.log(123);
  //   // alert(123);
  //   // let isValid = autService.lig(this.form.value);
  //   let isValid = true;
  //   if(isValid) { 
  //     this.form.setErrors({invalidLogin: true});
  //   }
  // }
}
