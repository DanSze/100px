import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { PxImagesComponent } from './px-images.component';
import { PxImageComponent, PxImageModalComponent } from './px-image.component';
import { PxLoginComponent } from './px-login.component';
import { PxService } from './px.service';

@NgModule({
  declarations: [
    PxImagesComponent, PxImageComponent, PxLoginComponent, PxImageModalComponent
  ],
  exports: [
    PxImagesComponent, PxLoginComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [ PxService ],
  bootstrap: [PxImageModalComponent]
})
export class PxModule { }