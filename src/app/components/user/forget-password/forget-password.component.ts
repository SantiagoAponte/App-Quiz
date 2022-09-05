import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  forgetForm: FormGroup;
  loading = false;
  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private _errorService: ErrorService,
    private router: Router) {
    this.forgetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
  }

  forgetPassword() {
    const email = this.forgetForm.get('email')?.value;

    this.afAuth.sendPasswordResetEmail(email).then((res)=>{
      this.loading = true;
      this.toastr.info('Enviamos un correo electronico para restablecer su contraseña', 'Restablecer Contraseña')
      this.router.navigate(['/user'])
    }).catch(error => {
      this.loading = false;
      this.toastr.error(this._errorService.error(error.code),'Error')
      this.forgetForm.reset();
    })
  }

}
