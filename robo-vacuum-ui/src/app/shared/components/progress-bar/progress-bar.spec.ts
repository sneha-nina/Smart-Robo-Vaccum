import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressBarComponent } from './progress-bar';

describe('ProgressBarComponent', () => {
  let component: ProgressBarComponent;
  let fixture: ComponentFixture<ProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressBarComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('value', 40);
    fixture.componentRef.setInput('max', 80);
    fixture.detectChanges();
  });

  it('calculates percentage from value and max', () => {
    expect(component.percentage()).toBe(50);
  });

  it('renders the computed percentage', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.textContent).toContain('50%');
  });
});
