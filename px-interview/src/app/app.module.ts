import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PxModule } from '../px-image/px.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
