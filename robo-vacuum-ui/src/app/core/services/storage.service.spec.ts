import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service';

describe('StorageService', () => {
  afterEach(() => {
    TestBed.resetTestingModule();
    localStorage.clear();
  });

  it('stores, reads, and removes values in the browser', () => {
    TestBed.configureTestingModule({
      providers: [{ provide: PLATFORM_ID, useValue: 'browser' }],
    });

    const service = TestBed.inject(StorageService);

    service.setItem('robot-mode', { mode: 'vacuum' });
    expect(service.getItem<{ mode: string }>('robot-mode')).toEqual({
      mode: 'vacuum',
    });

    service.removeItem('robot-mode');
    expect(service.getItem('robot-mode')).toBeNull();
  });

  it('returns null and does not throw on the server', () => {
    TestBed.configureTestingModule({
      providers: [{ provide: PLATFORM_ID, useValue: 'server' }],
    });

    const service = TestBed.inject(StorageService);

    expect(() => service.setItem('token', 'abc123')).not.toThrow();
    expect(() => service.removeItem('token')).not.toThrow();
    expect(service.getItem('token')).toBeNull();
  });
});
