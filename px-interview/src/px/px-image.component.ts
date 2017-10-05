import { Component, Input } from '@angular/core';
import { PxService } from './px.service';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'px-image',
  templateUrl: './px-image.component.html',
  styleUrls: ['./px-image.component.css']
})
export class PxImageComponent {

  constructor(private px: PxService, private modals: BsModalService){};

  @Input() image: any;
  modalImage: any = undefined; //Image to be used in the modal;

  openModal() {
    let modal: any;
    if (this.modalImage) {
      modal = this.modals.show(PxImageModalComponent);
      modal.content.image = this.modalImage;
      return;
    }
    this.px.getPhoto(this.image.id, [6], 1)
    .then( (photo) => {
      modal = this.modals.show(PxImageModalComponent);
      this.modalImage = photo;
      modal.content.image = photo;
    });
  }

}

@Component({
  selector: 'px-image-modal',
  templateUrl: './px-image-modal.component.html',
  styleUrls: ['./px-image-modal.component.css']
})
export class PxImageModalComponent {

  constructor(private px: PxService){}

  image: any;

  vote(vote: number) {
    if (!this.px.currentUser) {
      this.px.conditionalLogIn();
    } 

    this.px.vote(this.image.id, vote) //To coerce it to int
    .then((image) => {
      this.image.voted = true;
    });

  }

  unvote(vote: number) {
    if (!this.px.currentUser) {
      this.px.conditionalLogIn();
    } 

    this.px.deleteVote(this.image.id) //To coerce it to int
    .then((image) => {
      this.image.voted = false;
    });

  }
}