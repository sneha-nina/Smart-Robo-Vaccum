import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { DeviceService } from '../../../../core/services/device.service';
import { HomePageComponent } from './home';

describe('HomePageComponent', () => {
  it('selects a demo device before opening the device map', async () => {
    const selectDevice = vi.fn();

    await TestBed.configureTestingModule({
      imports: [HomePageComponent],
      providers: [
        provideRouter([]),
        {
          provide: DeviceService,
          useValue: { selectDevice },
        },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(HomePageComponent);
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    await fixture.componentInstance.openDeviceMap();

    expect(selectDevice).toHaveBeenCalledWith('rv-lab-01');
    expect(navigateSpy).toHaveBeenCalledWith(['/dashboard/device-map']);
  });
});
