import { computed, inject, Injectable, signal } from '@angular/core';
import { StorageService } from './storage.service';

export const AUTH_TOKEN_STORAGE_KEY = 'auth_token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly storageService = inject(StorageService);
  private readonly tokenState = signal<string | null>(
    this.storageService.getItem<string>(AUTH_TOKEN_STORAGE_KEY),
  );

  readonly token = computed(() => this.tokenState());
  readonly isAuthenticatedState = computed(() => this.tokenState() !== null);

  isAuthenticated(): boolean {
    return this.isAuthenticatedState();
  }

  getToken(): string | null {
    return this.tokenState();
  }

  setSession(token: string): void {
    this.storageService.setItem(AUTH_TOKEN_STORAGE_KEY, token);
    this.tokenState.set(token);
  }

  clearSession(): void {
    this.storageService.clearSession([AUTH_TOKEN_STORAGE_KEY]);
    this.tokenState.set(null);
  }
}
