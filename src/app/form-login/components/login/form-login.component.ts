import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  emailF!: FormControl;
  hide = true;
  formLogin!: FormGroup;

  constructor( 
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {
    this.buildForm();
    this.emailF = new FormControl('', [
      Validators.required,
      Validators.email,
    ])
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  login(event: Event) {
    event.preventDefault();
    if (this.formLogin.valid) {
      const value = this.formLogin.value;
      this.auth.login(value.email, value.password)
      .then(() => {
        this.router.navigate(['/admin']);
      })
      .catch(() => {
        alert('No es valido')
      })
    }
  }

  get User() {
    return this.formLogin.get('email');
  }

  get Pass() {
    return this.formLogin.get('password');
  }

}