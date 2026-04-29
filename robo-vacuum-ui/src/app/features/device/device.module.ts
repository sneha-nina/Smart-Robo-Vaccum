import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BatteryIndicatorComponent } from './components/battery-indicator/battery-indicator';
import { DeviceDetailsPageComponent } from './pages/device-details/device-details';

@NgModule({
  imports: [CommonModule, BatteryIndicatorComponent, DeviceDetailsPageComponent],
  exports: [BatteryIndicatorComponent, DeviceDetailsPageComponent],
})
export class DeviceModule {}
