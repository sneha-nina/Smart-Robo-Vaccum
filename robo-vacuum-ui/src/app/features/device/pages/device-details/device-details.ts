import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DeviceService } from '../../../../core/services/device.service';
import { StatusCardComponent } from '../../../../shared/components/status-card/status-card';
import { DeviceConnectionStatus } from '../../../../shared/models/device.model';
import { BatteryIndicatorComponent } from '../../components/battery-indicator/battery-indicator';

@Component({
  selector: 'app-device-details-page',
  standalone: true,
  imports: [BatteryIndicatorComponent, StatusCardComponent],
  templateUrl: './device-details.html',
  styleUrl: './device-details.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeviceDetailsPageComponent {
  private readonly deviceService = inject(DeviceService);

  readonly selectedDeviceId = signal(
    this.deviceService.getSelectedDevice() ?? 'rv-lab-01',
  );
  readonly deviceName = signal('Robo Vacuum A1');
  readonly batteryLevel = signal(84);
  readonly charging = signal(false);
  readonly currentRoom = signal('Kitchen');
  readonly lastSeen = signal('2 minutes ago');
  readonly connectionStatus = signal<DeviceConnectionStatus>('online');

  readonly statusTone = computed(() => {
    const status = this.connectionStatus();

    if (status === 'online') {
      return 'success';
    }

    if (status === 'maintenance' || status === 'sleeping') {
      return 'warning';
    }

    return 'danger';
  });

  loadDemoDevice(): void {
    this.deviceService.selectDevice('rv-lab-01');
    this.selectedDeviceId.set('rv-lab-01');
  }
}
