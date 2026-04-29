import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  templateUrl: './loader.html',
  styleUrl: './loader.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
  readonly label = input('Loading...');
  readonly overlay = input(false);
  readonly size = input<'sm' | 'md' | 'lg'>('md');

  readonly spinnerClass = computed(() => `spinner spinner-${this.size()}`);
}
