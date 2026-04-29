import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { LoginPageComponent } from './login';

describe('LoginPageComponent', () => {
  it('stores a session token and navigates to the dashboard when login succeeds', async () => {
    const setSession = vi.fn();

    await TestBed.configureTestingModule({
      imports: [LoginPageComponent],
      providers: [
        provideRouter([]),
        {
          provide: AuthService,
          useValue: { setSession },
        },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(LoginPageComponent);
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    await fixture.componentInstance.onLogin({
      email: 'pilot@robovac.io',
      password: 'password123',
    });

    expect(setSession).toHaveBeenCalledWith('demo-token:pilot@robovac.io');
    expect(fixture.componentInstance.lastLoginEmail()).toBe('pilot@robovac.io');
    expect(navigateSpy).toHaveBeenCalledWith(['/dashboard']);
  });
});
