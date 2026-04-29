import { TestBed } from '@angular/core/testing';
import { DeviceService } from '../../../../core/services/device.service';
import { DeviceDetailsPageComponent } from './device-details';

describe('DeviceDetailsPageComponent', () => {
  it('loads the selected device from the device service', async () => {
    await TestBed.configureTestingModule({
      imports: [DeviceDetailsPageComponent],
      providers: [
        {
          provide: DeviceService,
          useValue: {
            getSelectedDevice: () => 'rv-lab-42',
            selectDevice: vi.fn(),
          },
        },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(DeviceDetailsPageComponent);

    expect(fixture.componentInstance.selectedDeviceId()).toBe('rv-lab-42');
  });
});
