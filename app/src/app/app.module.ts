import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgAttributesDirective } from './ng-attributes.directive';
import { FooterComponent } from './footer/footer/footer.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { CartComponent } from './pages/cart/cart.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ServiceComponent } from './components/service/service.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NgAttributesDirective,
      NavbarComponent,
    FooterComponent,
    LandingComponent,
    CartComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
