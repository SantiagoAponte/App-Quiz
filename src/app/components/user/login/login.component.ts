import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private _errorService: ErrorService,
    private router: Router) { 
    this.loginForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['', Validators.required]
    }
    )
  }

  ngOnInit(): void {
  }

  login(){
    const email = this.loginForm.get('email')?.value
    const password = this.loginForm.get('password')?.value
    this.loading = true;
    this.afAuth.signInWithEmailAndPassword(email,password).then((res)=> {
      if(res.user?.emailVerified == false){
        this.router.navigate(['/user/verifyEmail'])
      } else {
        this.setLocalStorage(res.user);
        this.router.navigate(['/dashboard'])
      }
    }).catch(error => {
      this.loading = false;
      this.toastr.error(this._errorService.error(error.code),'Error')
      this.loginForm.reset();
    })
  }

  setLocalStorage(user:any){
    const usuario: User = {
      uid:user.uid,
      email: user.email
    }
    localStorage.setItem('user',JSON.stringify(usuario));
  }

}
