import { Component, OnInit } from '@angular/core';
import { PxService } from './px.service';

@Component({
  selector: 'px-login',
  templateUrl: './px-login.component.html',
  styleUrls: ['./px-login.component.css']
})
export class PxLoginComponent implements OnInit  {

    constructor(private px: PxService) {}
    text = 'Log In';

    ngOnInit() {
        this.px.onLogIn(() => {
            this.px.currentUser.then((user) => this.text = `Welcome, ${user.firstname?user.firstname:user.username}!`);
        });
        this.px.onLogOut(() => {
            this.text = 'Log In';
        });
    }

    logIn() {
        this.px.conditionalLogIn();
    }
}
