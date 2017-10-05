import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { PxService } from './px.service';

@Component({
  selector: 'px-login',
  templateUrl: './px-login.component.html',
  styleUrls: ['./px-login.component.css']
})
export class PxLoginComponent implements OnInit  {

    constructor(private px: PxService, private cdf: ChangeDetectorRef ) {}
    text = undefined;
    buttonText = 'Log In';

    ngOnInit() {
        this.px.onLogIn(() => {
            this.px.currentUser.then((user) => this.text = `Welcome, ${user.firstname?user.firstname:user.username}!`);
            this.cdf.detectChanges();
        });
        this.px.onLogOut(() => {
            this.text = undefined;
            this.cdf.detectChanges();
        });
    }

    logIn() {
            this.px.conditionalLogIn();
    }
}
