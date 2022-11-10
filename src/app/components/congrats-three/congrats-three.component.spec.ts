import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CongratsThreeComponent} from './congrats-three.component';

describe('CongratsThreeComponent', () => {
  let component: CongratsThreeComponent;
  let fixture: ComponentFixture<CongratsThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CongratsThreeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CongratsThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
