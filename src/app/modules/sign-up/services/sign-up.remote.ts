import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { SignUpResponse } from '../models/sign-up';

@Injectable()
export class SignUpRemote {
  constructor(private http: HttpClient) {}

  signUp(payload) {
    return this.http.post<SignUpResponse>(`${environment.apiUrl}/auth/sign_up/`, payload);
  }
}
