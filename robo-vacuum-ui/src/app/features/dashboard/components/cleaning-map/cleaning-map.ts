import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-cleaning-map',
  standalone: true,
  templateUrl: './cleaning-map.html',
  styleUrl: './cleaning-map.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CleaningMapComponent {
  readonly currentRoom = input('Living Room');
  readonly progress = input(0);
  readonly robotX = input(48);
  readonly robotY = input(58);
  readonly selectedDeviceId = input('rv-lab-01');

  readonly progressLabel = computed(() => `${this.progress()}% cleaned`);
}
