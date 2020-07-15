import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from './services/sign-up.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'hyper-sign-up',
  templateUrl: './sign-up.component.html',
  styles: [
    `
      .left-block {
        background-image: linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%);
      }

      #tv {
        position: relative;
        width: 800px;
        height: 600px;
        margin: 20px 0;
        background: #f3faf7;
        border-radius: 50% / 10%;
        color: white;
        text-align: center;
        text-indent: 0.1em;
      }
    `,
  ],
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  error$: Observable<string>;
  submitted = false;

  constructor(private fb: FormBuilder, private signUpService: SignUpService) {
    this.initializeForm();
  }

  signUp() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.error$ = this.signUpService.error$;
    this.signUpService.signUp(this.form.value);
  }

  ngOnInit(): void {}

  private initializeForm() {
    this.form = this.fb.group({
      first_name: [null, Validators.required],
      last_name: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.required],
    });
  }
}
