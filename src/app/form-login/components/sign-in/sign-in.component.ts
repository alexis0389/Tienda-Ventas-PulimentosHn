import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  emailSignIn!: FormControl;
  hide = true;
  formSignIn!: FormGroup;

  constructor( 
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {
    this.buildForm();
    this.emailSignIn = new FormControl('', [
      Validators.required,
      Validators.email,
    ])
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.formSignIn = this.formBuilder.group({
      name: ['', [Validators.required]],//
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  signIn(event: Event) {
    event.preventDefault();
    if (this.formSignIn.valid) {
      const value = this.formSignIn.value;
      this.auth.createUser(value.email, value.password)
      .then(() => {
        this.router.navigate(['/login']);
      });
    }
  }

  get Name() {
    return this.formSignIn.get('name');
  }

  get Email() {
    return this.formSignIn.get('email');
  }

  get Pass() {
    return this.formSignIn.get('password');
  }
}
