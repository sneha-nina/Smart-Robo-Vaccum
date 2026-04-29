import {
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom, of } from 'rxjs';
import { AUTH_TOKEN_STORAGE_KEY } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { authInterceptor } from './auth.interceptor';

describe('authInterceptor', () => {
  afterEach(() => {
    TestBed.resetTestingModule();
    localStorage.clear();
  });

  it('adds the bearer token when one exists', async () => {
    TestBed.configureTestingModule({
      providers: [{ provide: PLATFORM_ID, useValue: 'browser' }],
    });

    const storageService = TestBed.inject(StorageService);
    storageService.setItem(AUTH_TOKEN_STORAGE_KEY, 'jwt-token');

    let handledRequest: HttpRequest<unknown> | undefined;

    await firstValueFrom(
      TestBed.runInInjectionContext(() =>
        authInterceptor(new HttpRequest('GET', '/api/device'), (request) => {
          handledRequest = request;
          return of(new HttpResponse({ status: 200 }));
        }),
      ),
    );

    expect(handledRequest?.headers.get('Authorization')).toBe(
      'Bearer jwt-token',
    );
  });

  it('leaves the request unchanged when no token exists', async () => {
    TestBed.configureTestingModule({
      providers: [{ provide: PLATFORM_ID, useValue: 'browser' }],
    });

    let handledRequest: HttpRequest<unknown> | undefined;

    await firstValueFrom(
      TestBed.runInInjectionContext(() =>
        authInterceptor(new HttpRequest('GET', '/api/device'), (request) => {
          handledRequest = request;
          return of(new HttpResponse({ status: 200 }));
        }),
      ),
    );

    expect(handledRequest?.headers.has('Authorization')).toBe(false);
  });
});
