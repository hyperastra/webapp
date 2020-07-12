import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';
import { DirectivesModule } from '../../directives/directives.module';
import { SignInRemote } from './services/sign-in.remote';
import { SignInService } from './services/sign-in.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SignInComponent,
      },
    ]),
    TranslocoModule,
    DirectivesModule,
    SharedModule,
  ],
  exports: [],
  providers: [SignInRemote, SignInService, { provide: TRANSLOCO_SCOPE, useValue: 'sign-in' }],
})
export class SignInModule {}
