import { TestBed } from '@angular/core/testing';

import { TodosapiService } from './todosapi.service';

describe('TodosapiService', () => {
  let service: TodosapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
