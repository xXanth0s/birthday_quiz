import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CongratsTwoComponent} from './congrats-two.component';

describe('CongratsOneComponent', () => {
  let component: CongratsTwoComponent;
  let fixture: ComponentFixture<CongratsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CongratsTwoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CongratsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
