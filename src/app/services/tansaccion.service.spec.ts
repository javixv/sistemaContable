import { TestBed } from '@angular/core/testing';

import { TansaccionService } from './transaccion.service';

describe('TansaccionService', () => {
  let service: TansaccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TansaccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
