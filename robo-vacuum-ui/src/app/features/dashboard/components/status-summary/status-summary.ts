import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { StatusCardComponent } from '../../../../shared/components/status-card/status-card';
import { DeviceCleaningState } from '../../../../shared/models/device.model';

@Component({
  selector: 'app-status-summary',
  standalone: true,
  imports: [StatusCardComponent],
  templateUrl: './status-summary.html',
  styleUrl: './status-summary.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusSummaryComponent {
  readonly batteryLevel = input(84);
  readonly currentRoom = input('Living Room');
  readonly currentState = input<DeviceCleaningState>('idle');
}
