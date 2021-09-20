import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentapplycompanyComponent } from './studentapplycompany.component';

describe('StudentapplycompanyComponent', () => {
  let component: StudentapplycompanyComponent;
  let fixture: ComponentFixture<StudentapplycompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentapplycompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentapplycompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
