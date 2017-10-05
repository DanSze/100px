import { Component, Input } from '@angular/core';
import { PxImage } from './px-image';

@Component({
  selector: 'px-image',
  templateUrl: './px-image.component.html',
  styleUrls: ['./px-image.component.css']
})
export class PxImageComponent {
  @Input() image: any;
}