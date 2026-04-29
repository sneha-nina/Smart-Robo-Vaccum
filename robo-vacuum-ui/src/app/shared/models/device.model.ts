import { CleaningModeKey } from './cleaning-mode.model';

export type DeviceConnectionStatus =
  | 'online'
  | 'offline'
  | 'sleeping'
  | 'maintenance'
  | 'error';

export type DeviceCleaningState =
  | 'idle'
  | 'cleaning'
  | 'paused'
  | 'offline'
  | 'unknown';

export interface DeviceTelemetry {
  batteryLevel?: number;
  currentRoom?: string;
  dustbinLevel?: number;
  waterTankLevel?: number;
}

export interface Device {
  connectionStatus: DeviceConnectionStatus;
  id: string;
  lastSeenAt?: string;
  model?: string;
  name: string;
  telemetry?: DeviceTelemetry;
}

export interface DeviceStatus extends DeviceTelemetry {
  activeMode?: CleaningModeKey;
  deviceId: string;
  state: DeviceCleaningState;
}

export interface DeviceCommandResponse {
  message: string;
  success: boolean;
}
