import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCompanyProfileComponent } from './display-company-profile.component';

describe('DisplayCompanyProfileComponent', () => {
  let component: DisplayCompanyProfileComponent;
  let fixture: ComponentFixture<DisplayCompanyProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCompanyProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCompanyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
