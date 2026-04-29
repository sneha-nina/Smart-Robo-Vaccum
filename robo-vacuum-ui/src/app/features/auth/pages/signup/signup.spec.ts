import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { SignupPageComponent } from './signup';

describe('SignupPageComponent', () => {
  it('navigates to verification after signup', async () => {
    await TestBed.configureTestingModule({
      imports: [SignupPageComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(SignupPageComponent);
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    await fixture.componentInstance.onSignup({
      displayName: 'Alex',
      email: 'alex@robovac.io',
      password: 'password123',
      confirmPassword: 'password123',
    });

    expect(navigateSpy).toHaveBeenCalledWith(['/verify-email'], {
      queryParams: { email: 'alex@robovac.io' },
    });
    expect(fixture.componentInstance.pendingEmail()).toBe('alex@robovac.io');
  });
});
