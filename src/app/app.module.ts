import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CrosswordPuzzleComponent} from './components/crossword-puzzle/crossword-puzzle.component';
import {QuestionComponent} from './components/question/question.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTooltipModule} from "@angular/material/tooltip";
import {QuestionOverviewComponent} from './components/question-overview/question-overview.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonModule} from "@angular/material/button";
import {TestComponent} from './components/test/test.component';
import {CongratsOneComponent} from './components/congrats-one/congrats-one.component';
import {CongratsTwoComponent} from "./components/congrats-two/congrats-two.component";
import {CongratsThreeComponent} from './components/congrats-three/congrats-three.component';
import {SolutionComponent} from './components/solution/solution.component';

@NgModule({
  declarations: [
    AppComponent,
    CrosswordPuzzleComponent,
    QuestionComponent,
    QuestionOverviewComponent,
    TestComponent,
    CongratsOneComponent,
    CongratsTwoComponent,
    CongratsThreeComponent,
    SolutionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatDividerModule,
    MatExpansionModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
