import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { Translation, TranslocoLoader } from '@ngneat/transloco';
import { QuicklinkModule } from 'ngx-quicklink';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslocoRootModule } from './transloco-root.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) {}

  getTranslation(lang: string) {
    return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    QuicklinkModule,
    AppRoutingModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    HttpClientModule,
    TranslocoRootModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
