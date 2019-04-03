import { TestBed } from '@angular/core/testing';

import { ServiceDeskService } from './service-desk.service';

describe('ServiceDeskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceDeskService = TestBed.get(ServiceDeskService);
    expect(service).toBeTruthy();
  });
});
