import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDisplayDataComponent } from './student-display-data.component';

describe('StudentDisplayDataComponent', () => {
  let component: StudentDisplayDataComponent;
  let fixture: ComponentFixture<StudentDisplayDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDisplayDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDisplayDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
