import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-congrats-one',
  templateUrl: './congrats-one.component.html',
  styleUrls: ['./congrats-one.component.scss']
})
export class CongratsOneComponent {

  constructor(private readonly router: Router) {
  }

  goToGift() {
    this.router.navigateByUrl('congrats2')
  }
}
