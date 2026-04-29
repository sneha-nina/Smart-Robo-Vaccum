import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

export type IconButtonVariant = 'ghost' | 'primary' | 'secondary';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  templateUrl: './icon-button.html',
  styleUrl: './icon-button.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconButtonComponent {
  readonly ariaLabel = input('Action button');
  readonly disabled = input(false);
  readonly icon = input('play_arrow');
  readonly label = input('Action');
  readonly pressed = output<void>();
  readonly variant = input<IconButtonVariant>('ghost');

  readonly buttonClass = computed(() => `icon-button variant-${this.variant()}`);

  onPress(): void {
    if (this.disabled()) {
      return;
    }

    this.pressed.emit();
  }
}
