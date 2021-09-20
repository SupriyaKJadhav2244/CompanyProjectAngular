import { TestBed } from '@angular/core/testing';

import { RegiServiceService } from './regi-service.service';

describe('RegiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegiServiceService = TestBed.get(RegiServiceService);
    expect(service).toBeTruthy();
  });
});
