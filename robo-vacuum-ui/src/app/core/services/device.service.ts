import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import {
  DeviceCommandResponse,
  DeviceStatus,
} from '../../shared/models/device.model';
import { StorageService } from './storage.service';

export const SELECTED_DEVICE_STORAGE_KEY = 'selected_device_id';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  private readonly apiBaseUrl = '/api/device';
  private readonly http = inject(HttpClient);
  private readonly storageService = inject(StorageService);
  private readonly selectedDeviceIdState = signal<string | null>(
    this.storageService.getItem<string>(SELECTED_DEVICE_STORAGE_KEY),
  );

  readonly selectedDeviceId = computed(() => this.selectedDeviceIdState());

  selectDevice(deviceId: string): void {
    this.storageService.setItem(SELECTED_DEVICE_STORAGE_KEY, deviceId);
    this.selectedDeviceIdState.set(deviceId);
  }

  getSelectedDevice(): string | null {
    return this.selectedDeviceIdState();
  }

  hasSelectedDevice(): boolean {
    return this.selectedDeviceIdState() !== null;
  }

  clearSelectedDevice(): void {
    this.storageService.removeItem(SELECTED_DEVICE_STORAGE_KEY);
    this.selectedDeviceIdState.set(null);
  }

  getDeviceStatus(deviceId = this.resolveDeviceId()): Observable<DeviceStatus> {
    return this.http.get<DeviceStatus>(`${this.apiBaseUrl}/${deviceId}`);
  }

  startCleaning(
    deviceId = this.resolveDeviceId(),
  ): Observable<DeviceCommandResponse> {
    return this.http.post<DeviceCommandResponse>(
      `${this.apiBaseUrl}/${deviceId}/start`,
      {},
    );
  }

  stopCleaning(
    deviceId = this.resolveDeviceId(),
  ): Observable<DeviceCommandResponse> {
    return this.http.post<DeviceCommandResponse>(
      `${this.apiBaseUrl}/${deviceId}/stop`,
      {},
    );
  }

  private resolveDeviceId(): string {
    return this.selectedDeviceIdState() ?? 'current';
  }
}
