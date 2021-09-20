import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEducationalDetailComponent } from './student-educational-detail.component';

describe('StudentEducationalDetailComponent', () => {
  let component: StudentEducationalDetailComponent;
  let fixture: ComponentFixture<StudentEducationalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentEducationalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEducationalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
