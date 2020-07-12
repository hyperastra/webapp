import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ResetComponent } from './reset.component';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [ResetComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ResetComponent,
      },
    ]),
    TranslocoModule,
    DirectivesModule,
  ],
  exports: [],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'reset' }],
})
export class ResetModule {}
