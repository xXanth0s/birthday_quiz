import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CrosswordPuzzleComponent} from "./components/crossword-puzzle/crossword-puzzle.component";
import {CongratsOneComponent} from "./components/congrats-one/congrats-one.component";
import {CongratsTwoComponent} from "./components/congrats-two/congrats-two.component";
import {CongratsThreeComponent} from "./components/congrats-three/congrats-three.component";
import {SolutionComponent} from "./components/solution/solution.component";

const routes: Routes = [
  {
    path: '',
    component: CrosswordPuzzleComponent
  },
  {
    path: 'congrats',
    component: CongratsOneComponent
  },
  {
    path: 'congrats2',
    component: CongratsTwoComponent
  },
  {
    path: 'congrats3',
    component: CongratsThreeComponent
  },
  {
    path: 'solution',
    component: SolutionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
