import { TestBed } from '@angular/core/testing';

import { TrainLineRetrieverService } from './train-line-retriever.service';

describe('TrainLineRetrieverService', () => {
  let service: TrainLineRetrieverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainLineRetrieverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
