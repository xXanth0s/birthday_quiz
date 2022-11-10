import {Component} from '@angular/core';
import {Question} from "../../models/question.model";
import {FormArray} from "@angular/forms";
import {questions, result} from "../../models/questions.const";
import {Router} from "@angular/router";

@Component({
  selector: 'app-crossword-puzzle',
  templateUrl: './crossword-puzzle.component.html',
  styleUrls: ['./crossword-puzzle.component.scss']
})
export class CrosswordPuzzleComponent {

  readonly questions: Question[] = questions;
  readonly result = result
  readonly form = new FormArray<any>([]);
  maxSolutionCharPosition: number = Math.max(...this.questions.map(question => question.correctCharPosition))
  showNelson = false

  constructor(private readonly router: Router) {
  }

  //
  validate() {
    if (this.form.valid) {
      this.router.navigateByUrl('congrats')
    } else {
      this.showNelson = true;
      setTimeout(() => this.showNelson = false, 2000)
    }
  }
}
