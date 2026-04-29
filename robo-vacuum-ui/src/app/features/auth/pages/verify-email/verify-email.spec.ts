import { TestBed } from '@angular/core/testing';
import {
  ActivatedRoute,
  convertToParamMap,
  provideRouter,
} from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { VerifyEmailPageComponent } from './verify-email';

describe('VerifyEmailPageComponent', () => {
  it('marks the email as verified and stores a session token', async () => {
    const setSession = vi.fn();

    await TestBed.configureTestingModule({
      imports: [VerifyEmailPageComponent],
      providers: [
        provideRouter([]),
        {
          provide: AuthService,
          useValue: { setSession },
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParamMap: convertToParamMap({ email: 'alex@robovac.io' }),
            },
          },
        },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(VerifyEmailPageComponent);

    fixture.componentInstance.confirmVerification();

    expect(setSession).toHaveBeenCalledWith('verified:alex@robovac.io');
    expect(fixture.componentInstance.verified()).toBe(true);
  });
});
