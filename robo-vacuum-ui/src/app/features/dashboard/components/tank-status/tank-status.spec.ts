import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TankStatusComponent } from './tank-status';

describe('TankStatusComponent', () => {
  let fixture: ComponentFixture<TankStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TankStatusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TankStatusComponent);
    fixture.componentRef.setInput('waterLevel', 72);
    fixture.componentRef.setInput('dustbinLevel', 46);
    fixture.detectChanges();
  });

  it('renders both resource levels', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.textContent).toContain('72%');
    expect(element.textContent).toContain('46%');
  });
});
