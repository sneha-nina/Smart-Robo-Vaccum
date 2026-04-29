import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CleaningModeSelectorComponent } from './cleaning-mode-selector';

describe('CleaningModeSelectorComponent', () => {
  let fixture: ComponentFixture<CleaningModeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CleaningModeSelectorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CleaningModeSelectorComponent);
    fixture.detectChanges();
  });

  it('emits the selected cleaning mode', () => {
    const emittedModes: string[] = [];
    fixture.componentInstance.modeSelected.subscribe((mode) => emittedModes.push(mode));

    const buttons = fixture.nativeElement.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
    buttons[1].click();

    expect(emittedModes).toEqual(['mop']);
  });
});
