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
        this.px.getImages('popular', 100, [6]).then(imgs => {

            let height = 0; //The total height of the images
            for (let img of imgs) {
                height += img.height;
            }
            
            //Now that we have the total height, allocate them into three stacks of roughly equal height.
            imgs.sort( (a, b) => a.width/a.height - b.width/b.height); //sorting them tallest first guarantees most even distribution.
            let colIndex = 0;
            for (let img of imgs) {
                this.imageCols[colIndex].push(img);
                colIndex = (colIndex + 1) % 3;
            }
        });

    }
}
