import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AUTH_TOKEN_STORAGE_KEY, AuthService } from './auth.service';

describe('AuthService', () => {
  afterEach(() => {
    TestBed.resetTestingModule();
    localStorage.clear();
  });

  it('hydrates authentication state from storage', () => {
    localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, 'stored-token');

    TestBed.configureTestingModule({
      providers: [{ provide: PLATFORM_ID, useValue: 'browser' }],
    });

    const service = TestBed.inject(AuthService);

    expect(service.getToken()).toBe('stored-token');
    expect(service.isAuthenticated()).toBe(true);
  });

  it('persists and clears the active session', () => {
    TestBed.configureTestingModule({
      providers: [{ provide: PLATFORM_ID, useValue: 'browser' }],
    });

    const service = TestBed.inject(AuthService);

    service.setSession('fresh-token');
    expect(service.getToken()).toBe('fresh-token');
    expect(service.isAuthenticated()).toBe(true);
    expect(localStorage.getItem(AUTH_TOKEN_STORAGE_KEY)).toBe('fresh-token');

    service.clearSession();
    expect(service.getToken()).toBeNull();
    expect(service.isAuthenticated()).toBe(false);
    expect(localStorage.getItem(AUTH_TOKEN_STORAGE_KEY)).toBeNull();
  });
});
