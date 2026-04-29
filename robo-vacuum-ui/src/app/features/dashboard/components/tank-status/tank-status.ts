import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProgressBarComponent } from '../../../../shared/components/progress-bar/progress-bar';

@Component({
  selector: 'app-tank-status',
  standalone: true,
  imports: [ProgressBarComponent],
  templateUrl: './tank-status.html',
  styleUrl: './tank-status.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TankStatusComponent {
  readonly dustbinLevel = input(38);
  readonly waterLevel = input(62);
}
