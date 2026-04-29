import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { MainLayoutComponent } from './main-layout';

describe('MainLayoutComponent', () => {
  it('renders the main layout shell', async () => {
    await TestBed.configureTestingModule({
      imports: [MainLayoutComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(MainLayoutComponent);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.textContent).toContain('Robo Vacuum UI');
    expect(element.textContent).toContain('Dashboard');
    expect(element.querySelector('router-outlet')).toBeTruthy();
  });
});
