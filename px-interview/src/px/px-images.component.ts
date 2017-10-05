import { Component, Input, OnInit } from '@angular/core';
import { PxService } from './px.service';

@Component({
  selector: 'px-images',
  templateUrl: './px-images.component.html',
  styleUrls: ['./px-images.component.css']
})
export class PxImagesComponent implements OnInit {
    imageCols: any[][] = [[],[],[]];

    constructor(private px: PxService) {}

    ngOnInit(): void {
        this.px.getPhotos('popular', 100, [4]).then(imgs => {

            let colIndex = 0;
            for (let img of imgs) {
                this.imageCols[colIndex].push(img);
                colIndex = (colIndex + 1) % 3;
            }
        });

    }
}
