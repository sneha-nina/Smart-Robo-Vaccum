import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { IconButtonComponent } from '../../../../shared/components/icon-button/icon-button';

export type ManualControlCommand =
  | 'backward'
  | 'dock'
  | 'forward'
  | 'left'
  | 'right';

@Component({
  selector: 'app-manual-control-pad',
  standalone: true,
  imports: [IconButtonComponent],
  templateUrl: './manual-control-pad.html',
  styleUrl: './manual-control-pad.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManualControlPadComponent {
  readonly disabled = input(false);
  readonly commandIssued = output<ManualControlCommand>();
}
