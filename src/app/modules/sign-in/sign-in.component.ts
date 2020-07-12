import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SignInService } from './services/sign-in.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'hyper-sign-in',
  templateUrl: './sign-in.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent implements OnInit {
  form: FormGroup;
  error$: Observable<string>;

  constructor(private signInService: SignInService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
    this.error$ = this.signInService.error$;
  }

  signIn() {
    const { email, password } = this.form.value;
    this.signInService.signIn(email, password);
  }

  private initializeForm() {
    this.form = this.fb.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.required],
    });
  }
}
