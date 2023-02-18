import { TestBed } from '@angular/core/testing';

import { CreateDeactivateService } from './create-deactivate.service';

describe('CreateDeactivateService', () => {
  let service: CreateDeactivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateDeactivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
