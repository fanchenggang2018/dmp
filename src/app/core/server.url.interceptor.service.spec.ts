import { TestBed } from '@angular/core/testing';

import { Server.Url.InterceptorService } from './server.url.interceptor.service';

describe('Server.Url.InterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Server.Url.InterceptorService = TestBed.get(Server.Url.InterceptorService);
    expect(service).toBeTruthy();
  });
});
