import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CleaningMapComponent } from './components/cleaning-map/cleaning-map';
import { StartStopControlComponent } from './components/start-stop-control/start-stop-control';
import { StatusSummaryComponent } from './components/status-summary/status-summary';
import { TankStatusComponent } from './components/tank-status/tank-status';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DeviceMapPageComponent } from './pages/device-map/device-map';
import { HomePageComponent } from './pages/home/home';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CleaningMapComponent,
    StatusSummaryComponent,
    StartStopControlComponent,
    TankStatusComponent,
    HomePageComponent,
    DeviceMapPageComponent,
  ],
  exports: [
    CleaningMapComponent,
    StatusSummaryComponent,
    StartStopControlComponent,
    TankStatusComponent,
    HomePageComponent,
    DeviceMapPageComponent,
  ],
})
export class DashboardModule {}
