import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { deviceGuard } from '../../core/guards/device.guard';
import { DeviceMapPageComponent } from './pages/device-map/device-map';
import { HomePageComponent } from './pages/home/home';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'device-map',
    canActivate: [deviceGuard],
    component: DeviceMapPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(DASHBOARD_ROUTES)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
