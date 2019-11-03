import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideEmployeesComponent } from './slide-employees.component';

describe('SlideEmployeesComponent', () => {
  let component: SlideEmployeesComponent;
  let fixture: ComponentFixture<SlideEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
