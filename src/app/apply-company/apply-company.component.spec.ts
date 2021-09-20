import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyCompanyComponent } from './apply-company.component';

describe('ApplyCompanyComponent', () => {
  let component: ApplyCompanyComponent;
  let fixture: ComponentFixture<ApplyCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
