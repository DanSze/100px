import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PxImagesComponent } from './px-images.component';
import { PxImageComponent } from './px-image.component';
import { PxService } from './px.service';

@NgModule({
  declarations: [
    PxImagesComponent, PxImageComponent
  ],
  exports: [
    PxImagesComponent, PxImageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ PxService ]
})
export class PxModule { }