import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../../models/question.model";
import {AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn} from "@angular/forms";
import {faCircleXmark, faInfoCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input()
  question!: Question;

  @Input()
  form!: FormArray;

  @Input()
  maxSolutionCharPosition: number = 0

  @Input()
  hideDeleteButton = false;

  readonly faCircle = faCircleXmark;
  readonly faInfo = faInfoCircle;

  formControls: FormControl[] = [];
  spacerCount: number = 1;


  ngOnInit(): void {
    this.formControls = this.question.solution.split('').map((char, index) => {
      return new FormControl('', [
        this.isCharValid(char)
      ])
    })

    this.form.push(new FormGroup(this.formControls));

    this.spacerCount = this.maxSolutionCharPosition - this.question.correctCharPosition
  }

  isCharValid(char: string): ValidatorFn {
    return (control: AbstractControl<string>): ValidationErrors | null => {
      const value: string = control.value.toLowerCase().trim();
      console.log(value === char)
      return value === char ? null : {wrongChar: value};
    };
  }

  onDigitInput(event: any) {

    let element;
    if (event.code !== 'Backspace')
      element = event.srcElement.nextElementSibling;

    if (event.code === 'Backspace')
      element = event.srcElement.previousElementSibling;

    if (element == null)
      return;
    else
      element.focus();
  }

  isMainChar(question: Question, index: number): boolean {
    return index + 1 === question.correctCharPosition;
  }

  counter(i: number) {
    return new Array(i);
  }

  resetControls() {
    this.formControls.forEach(control => control.setValue(''))
  }
}
