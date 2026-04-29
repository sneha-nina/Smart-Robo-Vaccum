import {
  HttpErrorResponse,
  HttpInterceptorFn,
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export interface NormalizedHttpError {
  message: string;
  method: string;
  status: number;
  statusText: string;
  timestamp: string;
  url: string | null;
}

export type HttpErrorWithNormalization = HttpErrorResponse & {
  normalizedError?: NormalizedHttpError;
};

export const errorInterceptor: HttpInterceptorFn = (request, next) =>
  next(request).pipe(
    catchError((error: unknown) => {
      if (error instanceof HttpErrorResponse) {
        const normalizedError: NormalizedHttpError = {
          message: extractErrorMessage(error),
          method: request.method,
          status: error.status,
          statusText: error.statusText || 'Unknown Error',
          timestamp: new Date().toISOString(),
          url: error.url,
        };

        console.error('HTTP request failed', normalizedError);

        return throwError(() => {
          const enrichedError = error as HttpErrorWithNormalization;
          enrichedError.normalizedError = normalizedError;
          return enrichedError;
        });
      }

      console.error('Unexpected request error', error);
      return throwError(() => error);
    }),
  );

function extractErrorMessage(error: HttpErrorResponse): string {
  if (typeof error.error === 'string' && error.error.trim().length > 0) {
    return error.error;
  }

  if (
    error.error &&
    typeof error.error === 'object' &&
    'message' in error.error &&
    typeof error.error.message === 'string' &&
    error.error.message.trim().length > 0
  ) {
    return error.error.message;
  }

  if (error.message.trim().length > 0) {
    return error.message;
  }

  return 'An unexpected network error occurred.';
}
