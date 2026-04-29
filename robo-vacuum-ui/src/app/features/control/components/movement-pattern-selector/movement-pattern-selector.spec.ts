import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovementPatternSelectorComponent } from './movement-pattern-selector';

describe('MovementPatternSelectorComponent', () => {
  let fixture: ComponentFixture<MovementPatternSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovementPatternSelectorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MovementPatternSelectorComponent);
    fixture.detectChanges();
  });

  it('emits the selected movement pattern', () => {
    const emittedPatterns: string[] = [];
    fixture.componentInstance.patternSelected.subscribe((pattern) =>
      emittedPatterns.push(pattern),
    );

    const buttons = fixture.nativeElement.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
    buttons[2].click();

    expect(emittedPatterns).toEqual(['edge-follow']);
  });
});
