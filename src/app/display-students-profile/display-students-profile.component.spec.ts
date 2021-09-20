import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayStudentsProfileComponent } from './display-students-profile.component';

describe('DisplayStudentsProfileComponent', () => {
  let component: DisplayStudentsProfileComponent;
  let fixture: ComponentFixture<DisplayStudentsProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayStudentsProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayStudentsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
