import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { DirectivesModule } from '../../directives/directives.module';
import { SharedModule } from '../shared/shared.module';
import { SignUpComponent } from './sign-up.component';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SignUpComponent,
      },
    ]),
    TranslocoModule,
    DirectivesModule,
    SharedModule,
  ],
  exports: [],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'sign-up' }],
})
export class SignUpModule {}
