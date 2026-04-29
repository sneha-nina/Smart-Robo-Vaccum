import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

export type MovementPatternKey = 'edge-follow' | 'room-route' | 'spiral' | 'zigzag';

export interface MovementPatternOption {
  description: string;
  key: MovementPatternKey;
  label: string;
}

const MOVEMENT_PATTERN_OPTIONS: readonly MovementPatternOption[] = [
  {
    key: 'zigzag',
    label: 'Zigzag',
    description: 'Sweep back and forth for wide open floor coverage.',
  },
  {
    key: 'spiral',
    label: 'Spiral',
    description: 'Expand from the center for concentrated dirt pickup.',
  },
  {
    key: 'edge-follow',
    label: 'Edge Follow',
    description: 'Hug walls and corners before center coverage.',
  },
  {
    key: 'room-route',
    label: 'Room Route',
    description: 'Traverse named rooms in the selected order.',
  },
];

@Component({
  selector: 'app-movement-pattern-selector',
  standalone: true,
  templateUrl: './movement-pattern-selector.html',
  styleUrl: './movement-pattern-selector.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovementPatternSelectorComponent {
  readonly selectedPattern = input<MovementPatternKey>('zigzag');
  readonly patternSelected = output<MovementPatternKey>();
  readonly options = MOVEMENT_PATTERN_OPTIONS;
}
