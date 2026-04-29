import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly platformId = inject(PLATFORM_ID);

  private get storage(): Storage | null {
    if (!isPlatformBrowser(this.platformId) || typeof localStorage === 'undefined') {
      return null;
    }

    return localStorage;
  }

  getItem<T>(key: string): T | null {
    const rawValue = this.storage?.getItem(key);

    if (rawValue === null || rawValue === undefined) {
      return null;
    }

    try {
      return JSON.parse(rawValue) as T;
    } catch {
      return rawValue as T;
    }
  }

  setItem<T>(key: string, value: T): void {
    if (!this.storage) {
      return;
    }

    const serializedValue =
      typeof value === 'string' ? value : JSON.stringify(value);

    this.storage.setItem(key, serializedValue);
  }

  removeItem(key: string): void {
    this.storage?.removeItem(key);
  }

  clearSession(keys: string[] = []): void {
    if (!this.storage) {
      return;
    }

    for (const key of keys) {
      this.storage.removeItem(key);
    }
  }
}
