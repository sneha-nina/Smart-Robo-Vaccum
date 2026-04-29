import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { IconButtonComponent } from '../../../../shared/components/icon-button/icon-button';
import { ToggleButtonComponent } from '../../../../shared/components/toggle-button/toggle-button';

@Component({
  selector: 'app-start-stop-control',
  standalone: true,
  imports: [IconButtonComponent, ToggleButtonComponent],
  templateUrl: './start-stop-control.html',
  styleUrl: './start-stop-control.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartStopControlComponent {
  readonly activeMode = input('Vacuum + Mop');
  readonly deviceName = input('Robo Vacuum A1');
  readonly isRunning = input(false);
  readonly cleaningToggled = output<boolean>();
  readonly startRequested = output<void>();
  readonly stopRequested = output<void>();
}
