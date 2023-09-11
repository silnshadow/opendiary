import { TestBed } from '@angular/core/testing';

import { DiaryserviceService } from './diaryservice.service';

describe('DiaryserviceService', () => {
  let service: DiaryserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiaryserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
