import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AngularFireAuthModule, FormsModule, ReactiveFormsModule],
  exports: [DirectivesModule, AngularFireAuthModule, FormsModule, ReactiveFormsModule],
  providers: [],
})
export class SharedModule {}
