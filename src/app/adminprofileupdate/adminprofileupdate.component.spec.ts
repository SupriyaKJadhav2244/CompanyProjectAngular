import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminprofileupdateComponent } from './adminprofileupdate.component';

describe('AdminprofileupdateComponent', () => {
  let component: AdminprofileupdateComponent;
  let fixture: ComponentFixture<AdminprofileupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminprofileupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminprofileupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
