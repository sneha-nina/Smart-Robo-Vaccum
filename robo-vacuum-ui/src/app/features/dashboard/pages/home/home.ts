import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceService } from '../../../../core/services/device.service';
import { CleaningModeKey } from '../../../../shared/models/cleaning-mode.model';
import { CleaningMapComponent } from '../../components/cleaning-map/cleaning-map';
import { StartStopControlComponent } from '../../components/start-stop-control/start-stop-control';
import { StatusSummaryComponent } from '../../components/status-summary/status-summary';
import { TankStatusComponent } from '../../components/tank-status/tank-status';

@Component({
  selector: 'app-dashboard-home-page',
  standalone: true,
  imports: [
    CleaningMapComponent,
    StartStopControlComponent,
    StatusSummaryComponent,
    TankStatusComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  private readonly deviceService = inject(DeviceService);
  private readonly router = inject(Router);

  readonly deviceName = signal('Robo Vacuum A1');
  readonly selectedRoom = signal('Living Room');
  readonly isCleaning = signal(false);
  readonly mapProgress = signal(36);
  readonly batteryLevel = signal(84);
  readonly waterLevel = signal(62);
  readonly dustbinLevel = signal(38);
  readonly activeMode = signal<CleaningModeKey>('vacuum-mop');
  readonly robotX = signal(48);
  readonly robotY = signal(58);

  connectDemoDevice(): void {
    this.deviceService.selectDevice('rv-lab-01');
  }

  async openDeviceMap(): Promise<void> {
    this.connectDemoDevice();
    await this.router.navigate(['/dashboard/device-map']);
  }

  setCleaningState(nextState: boolean): void {
    this.isCleaning.set(nextState);
  }

  startCleaning(): void {
    this.connectDemoDevice();
    this.isCleaning.set(true);
    this.mapProgress.set(52);
    this.selectedRoom.set('Hall');
    this.robotX.set(61);
    this.robotY.set(44);
  }

  stopCleaning(): void {
    this.isCleaning.set(false);
  }
}
