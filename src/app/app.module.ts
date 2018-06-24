import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'; //get request post daddi mek dnn kyl doc eke tynw
import { HotelDataServiseService } from './hotel-data-servise.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ HotelDataServiseService ],// service ekk provide krn nis mthn dgtte
  bootstrap: [AppComponent]
})
export class AppModule { }
