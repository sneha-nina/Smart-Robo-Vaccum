import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { DeviceService } from '../../../../core/services/device.service';
import { DeviceMapPageComponent } from './device-map';

describe('DeviceMapPageComponent', () => {
  it('reads the selected device from the device service', async () => {
    await TestBed.configureTestingModule({
      imports: [DeviceMapPageComponent],
      providers: [
        provideRouter([]),
        {
          provide: DeviceService,
          useValue: {
            getSelectedDevice: () => 'rv-lab-99',
          },
        },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(DeviceMapPageComponent);

    expect(fixture.componentInstance.selectedDeviceId()).toBe('rv-lab-99');
  });
});
