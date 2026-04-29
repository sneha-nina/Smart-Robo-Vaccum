import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  templateUrl: './toggle-button.html',
  styleUrl: './toggle-button.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleButtonComponent {
  readonly checked = input(false);
  readonly disabled = input(false);
  readonly label = input('Power');
  readonly offLabel = input('Off');
  readonly onLabel = input('On');
  readonly toggled = output<boolean>();

  onToggle(): void {
    if (this.disabled()) {
      return;
    }

    this.toggled.emit(!this.checked());
  }
}
