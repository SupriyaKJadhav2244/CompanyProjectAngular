import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomePgeComponent } from './admin-home-pge.component';

describe('AdminHomePgeComponent', () => {
  let component: AdminHomePgeComponent;
  let fixture: ComponentFixture<AdminHomePgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHomePgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomePgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
