import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundErrorComponent } from './not-found-error/not-found-error.component';
import { FeaturesComponent } from './features/features.component';
import { OpenSourcesComponent } from './open-sources/open-sources.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TosComponent } from './tos/tos.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NotFoundErrorComponent,
    FeaturesComponent,
    OpenSourcesComponent,
    PrivacyComponent,
    TosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
