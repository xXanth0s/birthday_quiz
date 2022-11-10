import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CongratsOneComponent} from './congrats-one.component';

describe('CongratsOneComponent', () => {
  let component: CongratsOneComponent;
  let fixture: ComponentFixture<CongratsOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CongratsOneComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CongratsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
