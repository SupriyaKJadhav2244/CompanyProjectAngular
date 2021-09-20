import { TestBed } from '@angular/core/testing';

import { UpdateCompanyService } from './update-company.service';

describe('UpdateCompanyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateCompanyService = TestBed.get(UpdateCompanyService);
    expect(service).toBeTruthy();
  });
});
