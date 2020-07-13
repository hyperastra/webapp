import { Injectable } from '@angular/core';
import { SignUpRemote } from './sign-up.remote';
import { SignUpPayloadDto } from '../models/sign-up';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SignUpService {
  error$ = new BehaviorSubject<string>(null);

  constructor(private signUpRemote: SignUpRemote) {}

  signUp(payload: SignUpPayloadDto) {
    this.error$.next(null);
    this.signUpRemote.signUp(payload).subscribe();
  }
}
