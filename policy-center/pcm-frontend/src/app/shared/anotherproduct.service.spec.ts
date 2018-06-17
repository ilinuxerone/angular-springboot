import { TestBed, inject } from '@angular/core/testing';

import { AnotherproductService } from './anotherproduct.service';

describe('AnotherproductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnotherproductService]
    });
  });

  it('should be created', inject([AnotherproductService], (service: AnotherproductService) => {
    expect(service).toBeTruthy();
  }));
});
