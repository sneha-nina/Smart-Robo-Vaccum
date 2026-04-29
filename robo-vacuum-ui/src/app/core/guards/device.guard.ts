import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { DeviceService } from '../services/device.service';

export const deviceGuard: CanActivateFn = () => {
  const deviceService = inject(DeviceService);
  const router = inject(Router);

  return deviceService.hasSelectedDevice()
    ? true
    : router.createUrlTree(['/dashboard']);
};
