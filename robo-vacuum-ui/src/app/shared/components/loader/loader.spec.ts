import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderComponent } from './loader';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('label', 'Syncing telemetry');
    fixture.detectChanges();
  });

  it('renders the loader label', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.textContent).toContain('Syncing telemetry');
  });

  it('applies the chosen spinner size', () => {
    fixture.componentRef.setInput('size', 'lg');
    fixture.detectChanges();

    expect(component.spinnerClass()).toContain('spinner-lg');
  });
});
