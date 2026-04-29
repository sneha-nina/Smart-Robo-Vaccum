import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DeviceService } from '../../../../core/services/device.service';
import { StatusCardComponent } from '../../../../shared/components/status-card/status-card';
import { CleaningMapComponent } from '../../components/cleaning-map/cleaning-map';
import { StatusSummaryComponent } from '../../components/status-summary/status-summary';

@Component({
  selector: 'app-device-map-page',
  standalone: true,
  imports: [RouterLink, CleaningMapComponent, StatusSummaryComponent, StatusCardComponent],
  templateUrl: './device-map.html',
  styleUrl: './device-map.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeviceMapPageComponent {
  private readonly deviceService = inject(DeviceService);

  readonly selectedDeviceId = signal(
    this.deviceService.getSelectedDevice() ?? 'rv-lab-01',
  );
  readonly currentRoom = signal('Kitchen');
  readonly mapProgress = signal(68);
  readonly batteryLevel = signal(79);
  readonly robotX = signal(69);
  readonly robotY = signal(34);
}
