import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class SignInRemote {
  constructor(private auth: AngularFireAuth) {}

  signIn(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
}
