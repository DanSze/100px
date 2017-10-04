import { Component, Input, OnInit } from '@angular/core';
import { PxService } from './px.service';

@Component({
  selector: 'px-images',
  templateUrl: './px-images.component.html',
  styleUrls: ['./px-images.component.css']
})
export class PxImagesComponent implements OnInit {
    images: any[];

    constructor(private px: PxService) {}

    ngOnInit(): void {
        this.px.getImages('popular', 100).then(images => this.images = images);
    }
}