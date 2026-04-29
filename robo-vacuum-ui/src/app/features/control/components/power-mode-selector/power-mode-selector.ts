import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

export type PowerModeKey = 'balanced' | 'quiet' | 'turbo';

export interface PowerModeOption {
  description: string;
  key: PowerModeKey;
  label: string;
}

const POWER_MODE_OPTIONS: readonly PowerModeOption[] = [
  {
    key: 'quiet',
    label: 'Quiet',
    description: 'Lower suction for low-noise daily cleaning.',
  },
  {
    key: 'balanced',
    label: 'Balanced',
    description: 'Recommended mix of power and battery life.',
  },
  {
    key: 'turbo',
    label: 'Turbo',
    description: 'Maximum suction for carpets and heavy debris.',
  },
];

@Component({
  selector: 'app-power-mode-selector',
  standalone: true,
  templateUrl: './power-mode-selector.html',
  styleUrl: './power-mode-selector.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PowerModeSelectorComponent {
  readonly selectedMode = input<PowerModeKey>('balanced');
  readonly modeSelected = output<PowerModeKey>();
  readonly options = POWER_MODE_OPTIONS;
}
