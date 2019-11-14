import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TestPageComponent } from './testpage/testpage.component';
import { HttpPageComponent } from './httppage/httppage.component';
import { ServicePageComponent } from './servicepage/servicepage.component'
import { NovDataService } from './services/novdata.service';



@NgModule({
  declarations: [
    AppComponent,
    TestPageComponent,
    HttpPageComponent,
    ServicePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NovDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
