import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type ProgressBarTone = 'danger' | 'primary' | 'success' | 'warning';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent {
  readonly label = input('');
  readonly max = input(100);
  readonly showValue = input(true);
  readonly tone = input<ProgressBarTone>('primary');
  readonly value = input(0);

  readonly percentage = computed(() => {
    const maxValue = this.max();
    const currentValue = this.value();

    if (maxValue <= 0) {
      return 0;
    }

    return Math.max(0, Math.min(100, Math.round((currentValue / maxValue) * 100)));
  });
}
