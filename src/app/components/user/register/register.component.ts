import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]],
      password2:['',]
    }, {validator: this.checkPassword})
   }

  ngOnInit(): void {
  }

  register(){
    console.log(this.registerForm)
  }

  checkPassword(group: FormGroup): any {
    const pass = group.controls.password?.value;
    const confirmPassword = group.controls.password2?.value;

    return pass === confirmPassword ? null : {notSame: true}
  }

}
