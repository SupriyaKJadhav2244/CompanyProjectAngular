import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAdminProfileComponent } from './student-admin-profile.component';

describe('StudentAdminProfileComponent', () => {
  let component: StudentAdminProfileComponent;
  let fixture: ComponentFixture<StudentAdminProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAdminProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAdminProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
