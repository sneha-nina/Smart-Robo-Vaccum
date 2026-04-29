import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type StatusCardTone = 'danger' | 'neutral' | 'success' | 'warning';

@Component({
  selector: 'app-status-card',
  standalone: true,
  templateUrl: './status-card.html',
  styleUrl: './status-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusCardComponent {
  readonly icon = input('sensors');
  readonly subtitle = input('');
  readonly title = input('Status');
  readonly tone = input<StatusCardTone>('neutral');
  readonly value = input<string | number>('--');

  readonly toneClass = computed(() => `card tone-${this.tone()}`);
}
