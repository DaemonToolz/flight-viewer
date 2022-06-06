import { TestBed } from '@angular/core/testing';

import { FlightRetrieverService } from './flight-retriever.service';

describe('FlightRetrieverService', () => {
  let service: FlightRetrieverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightRetrieverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
