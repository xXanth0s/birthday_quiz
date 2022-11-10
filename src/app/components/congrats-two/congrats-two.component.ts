import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-congrats-two',
  templateUrl: './congrats-two.component.html',
  styleUrls: ['./congrats-two.component.scss']
})
export class CongratsTwoComponent {

  constructor(private readonly router: Router) {
  }

  goToGift() {
    this.router.navigateByUrl('congrats3')
  }
}
