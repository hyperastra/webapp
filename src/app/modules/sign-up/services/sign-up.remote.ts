import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class SignUpRemote {
  constructor(private auth: AngularFireAuth) {}
}
