import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToggleButtonComponent } from './toggle-button';

describe('ToggleButtonComponent', () => {
  let fixture: ComponentFixture<ToggleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToggleButtonComponent);
    fixture.detectChanges();
  });

  it('emits the next checked state when clicked', () => {
    const emittedValues: boolean[] = [];
    fixture.componentInstance.toggled.subscribe((value) => emittedValues.push(value));

    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    button.click();

    expect(emittedValues).toEqual([true]);
  });

  it('does not emit when disabled', () => {
    const emittedValues: boolean[] = [];
    fixture.componentInstance.toggled.subscribe((value) => emittedValues.push(value));
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    button.click();

    expect(emittedValues).toEqual([]);
  });
});
