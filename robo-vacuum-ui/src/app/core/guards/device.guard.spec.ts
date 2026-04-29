import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  provideRouter,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { deviceGuard } from './device.guard';
import { DeviceService } from '../services/device.service';

describe('deviceGuard', () => {
  function executeGuard() {
    return TestBed.runInInjectionContext(() =>
      deviceGuard({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot),
    );
  }

  it('allows navigation when a device is selected', () => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        {
          provide: DeviceService,
          useValue: {
            hasSelectedDevice: () => true,
          },
        },
      ],
    });

    expect(executeGuard()).toBe(true);
  });

  it('redirects to the dashboard root when no device is selected', () => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        {
          provide: DeviceService,
          useValue: {
            hasSelectedDevice: () => false,
          },
        },
      ],
    });

    const router = TestBed.inject(Router);
    const result = executeGuard() as boolean | UrlTree;

    expect(result instanceof UrlTree).toBe(true);
    expect(router.serializeUrl(result as UrlTree)).toBe('/dashboard');
  });
});
