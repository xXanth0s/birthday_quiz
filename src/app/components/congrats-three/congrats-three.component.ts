import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-congrats-three',
  templateUrl: './congrats-three.component.html',
  styleUrls: ['./congrats-three.component.scss']
})
export class CongratsThreeComponent {

  constructor(private readonly router: Router) {
  }

  goToGift() {
    this.router.navigateByUrl('solution')
  }
}
