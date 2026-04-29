import {
  HttpErrorResponse,
  HttpRequest,
} from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom, throwError } from 'rxjs';
import { vi } from 'vitest';
import {
  errorInterceptor,
  HttpErrorWithNormalization,
} from './error.interceptor';

describe('errorInterceptor', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    TestBed.resetTestingModule();
  });

  it('rethrows HTTP errors with normalized metadata attached', async () => {
    TestBed.configureTestingModule({});

    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => undefined);
    const httpError = new HttpErrorResponse({
      error: { message: 'Token expired' },
      status: 401,
      statusText: 'Unauthorized',
      url: '/api/device',
    });

    try {
      await firstValueFrom(
        TestBed.runInInjectionContext(() =>
          errorInterceptor(new HttpRequest('GET', '/api/device'), () =>
            throwError(() => httpError),
          ),
        ),
      );
      throw new Error('Expected the interceptor to rethrow the HTTP error.');
    } catch (error) {
      const enrichedError = error as HttpErrorWithNormalization;

      expect(enrichedError).toBe(httpError);
      expect(enrichedError.normalizedError).toMatchObject({
        message: 'Token expired',
        method: 'GET',
        status: 401,
        statusText: 'Unauthorized',
        url: '/api/device',
      });
      expect(consoleErrorSpy).toHaveBeenCalledOnce();
    }
  });
});
