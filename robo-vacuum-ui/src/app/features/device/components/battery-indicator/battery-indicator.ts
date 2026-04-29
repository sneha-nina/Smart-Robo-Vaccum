import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ProgressBarComponent } from '../../../../shared/components/progress-bar/progress-bar';

@Component({
  selector: 'app-battery-indicator',
  standalone: true,
  imports: [ProgressBarComponent],
  templateUrl: './battery-indicator.html',
  styleUrl: './battery-indicator.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BatteryIndicatorComponent {
  readonly charging = input(false);
  readonly label = input('Battery health');
  readonly level = input(0);
  readonly lastUpdated = input('Just now');

  readonly tone = computed(() => {
    const currentLevel = this.level();

    if (currentLevel >= 70) {
      return 'success';
    }

    if (currentLevel >= 35) {
      return 'warning';
    }

    return 'danger';
  });

  readonly statusLabel = computed(() =>
    this.charging() ? 'Charging' : 'Discharging',
  );
}
