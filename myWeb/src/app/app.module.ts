import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceComponent } from './home/service/service.component';
import { VideoComponent } from './home/video/video.component';
import { OrderComponent } from './home/order/order.component';
import { TestominalComponent } from './home/testominal/testominal.component';
import { BrandComponent } from './home/brand/brand.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    SliderComponent,
    FooterComponent,
    ServiceComponent,
    VideoComponent,
    OrderComponent,
    TestominalComponent,
    BrandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
