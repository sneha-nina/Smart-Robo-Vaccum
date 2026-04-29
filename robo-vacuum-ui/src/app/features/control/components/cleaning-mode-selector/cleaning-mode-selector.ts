import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import {
  CLEANING_MODE_OPTIONS,
  CleaningModeKey,
  CleaningModeOption,
} from '../../../../shared/models/cleaning-mode.model';

@Component({
  selector: 'app-cleaning-mode-selector',
  standalone: true,
  templateUrl: './cleaning-mode-selector.html',
  styleUrl: './cleaning-mode-selector.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CleaningModeSelectorComponent {
  readonly selectedMode = input<CleaningModeKey>('vacuum');
  readonly modeSelected = output<CleaningModeKey>();
  readonly options: readonly CleaningModeOption[] = CLEANING_MODE_OPTIONS;
}
