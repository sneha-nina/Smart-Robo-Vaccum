import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconButtonComponent } from './icon-button';

describe('IconButtonComponent', () => {
  let fixture: ComponentFixture<IconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconButtonComponent);
    fixture.detectChanges();
  });

  it('emits when pressed', () => {
    let pressCount = 0;
    fixture.componentInstance.pressed.subscribe(() => {
      pressCount += 1;
    });

    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    button.click();

    expect(pressCount).toBe(1);
  });

  it('applies the chosen variant class', () => {
    fixture.componentRef.setInput('variant', 'primary');
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    expect(button.className).toContain('variant-primary');
  });
});
