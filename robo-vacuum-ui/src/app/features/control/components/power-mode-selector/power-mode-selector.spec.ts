import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PowerModeSelectorComponent } from './power-mode-selector';

describe('PowerModeSelectorComponent', () => {
  let fixture: ComponentFixture<PowerModeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowerModeSelectorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PowerModeSelectorComponent);
    fixture.detectChanges();
  });

  it('emits the chosen power mode', () => {
    const emittedModes: string[] = [];
    fixture.componentInstance.modeSelected.subscribe((mode) => emittedModes.push(mode));

    const buttons = fixture.nativeElement.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
    buttons[2].click();

    expect(emittedModes).toEqual(['turbo']);
  });
});
