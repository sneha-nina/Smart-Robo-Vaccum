import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BatteryIndicatorComponent } from './battery-indicator';

describe('BatteryIndicatorComponent', () => {
  let fixture: ComponentFixture<BatteryIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatteryIndicatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BatteryIndicatorComponent);
    fixture.componentRef.setInput('level', 82);
    fixture.componentRef.setInput('charging', true);
    fixture.detectChanges();
  });

  it('renders the battery level and charging state', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.textContent).toContain('82%');
    expect(element.textContent).toContain('Charging');
  });
});
