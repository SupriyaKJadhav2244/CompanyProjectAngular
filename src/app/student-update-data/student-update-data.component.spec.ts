import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentUpdateDataComponent } from './student-update-data.component';

describe('StudentUpdateDataComponent', () => {
  let component: StudentUpdateDataComponent;
  let fixture: ComponentFixture<StudentUpdateDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentUpdateDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentUpdateDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
