import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../../directives/directives.module';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from '../table/table.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AngularFireAuthModule, FormsModule, ReactiveFormsModule, DirectivesModule],
  exports: [DirectivesModule, AngularFireAuthModule, FormsModule, ReactiveFormsModule, HttpClientModule, TableModule],
  providers: [],
})
export class SharedModule {}
