import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm: FormGroup;
loading = false;
  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private toastr: ToastrService,
    private _errorService: ErrorService) {
    this.registerForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]],
      password2:['',]
    }, {validator: this.checkPassword})
   }

  ngOnInit(): void {
  }

  register(){
    const email = this.registerForm.get('email')?.value
    const password = this.registerForm.get('password')?.value

    this.loading = true;
    this.afAuth.createUserWithEmailAndPassword(email,password).then(rta => {
      rta.user?.sendEmailVerification();
    this.toastr.success('Enviamos un correo electronico para verificar su cuenta','Usuario registrado')
    this.router.navigate(['/user'])
    }).catch(error => {
      this.loading = false;
      this.toastr.error(this._errorService.error(error.code),'Error')
      this.registerForm.reset();
    })
  }

  // error(code:string): string {
  //   switch(code){
  //     //Email registrado en BD
  //     case 'auth/email-already-in-use':
  //     return 'El correo ya esta registrado';

  //     case 'auth/invalid-email':
  //       return 'El Correo es invalido';

  //     case 'auth/weak-password':
  //       return 'Al menos debe tener 6 caracteres la contraseña';

  //     default :
  //     return 'Error desconocido';
  //   }
  // }

  checkPassword(group: FormGroup): any {
    const pass = group.controls.password?.value;
    const confirmPassword = group.controls.password2?.value;

    return pass === confirmPassword ? null : {notSame: true}
  }

}
