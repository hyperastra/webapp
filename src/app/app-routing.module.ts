import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuicklinkStrategy, QuicklinkModule } from 'ngx-quicklink';

const routes: Routes = [
  {
    path: 'sign_in',
    loadChildren: () => import('./modules/sign-in/sign-in.module').then((m) => m.SignInModule),
  },
  {
    path: 'sign_up',
    loadChildren: () => import('./modules/sign-up/sign-up.module').then((m) => m.SignUpModule),
  },
  {
    path: 'reset',
    loadChildren: () => import('./modules/reset/reset.module').then((m) => m.ResetModule),
  },
  {
    path: '**',
    redirectTo: 'sign_in',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: QuicklinkStrategy,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
