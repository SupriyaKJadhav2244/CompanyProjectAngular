import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCompanyProfileComponent } from './update-company-profile.component';

describe('UpdateCompanyProfileComponent', () => {
  let component: UpdateCompanyProfileComponent;
  let fixture: ComponentFixture<UpdateCompanyProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCompanyProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCompanyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
