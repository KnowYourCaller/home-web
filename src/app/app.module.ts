import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundErrorComponent } from './not-found-error/not-found-error.component';
import { FeaturesComponent } from './features/features.component';
import { OpenSourcesComponent } from './open-sources/open-sources.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TosComponent } from './tos/tos.component';
import { SearchComponent } from './search/search.component';
import { MainNavBarComponent } from './main-nav-bar/main-nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { NgHcaptchaModule } from 'ng-hcaptcha';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NotFoundErrorComponent,
    FeaturesComponent,
    OpenSourcesComponent,
    PrivacyComponent,
    TosComponent,
    SearchComponent,
    MainNavBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule,
    BrowserAnimationsModule,

    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatCardModule,

    NgHcaptchaModule.forRoot({
      siteKey: 'd57a840e-0950-4db1-a942-5254ce656b48',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
