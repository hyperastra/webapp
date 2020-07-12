import { Injectable } from '@angular/core';
import { SignInRemote } from './sign-in.remote';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SignInService {
  error$ = new BehaviorSubject<string>(null);

  constructor(private signInRemote: SignInRemote) {}

  async signIn(email: string, password: string) {
    this.error$.next(null);
    try {
      await this.signInRemote.signIn(email, password);
    } catch (error) {
      this.error$.next(error);
    }
  }
}
