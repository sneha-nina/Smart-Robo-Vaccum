import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { StatusCardComponent } from '../../../../shared/components/status-card/status-card';
import { EmailVerificationComponent } from '../../components/email-verification/email-verification';

@Component({
  selector: 'app-verify-email-page',
  standalone: true,
  imports: [EmailVerificationComponent, RouterLink, StatusCardComponent],
  templateUrl: './verify-email.html',
  styleUrl: './verify-email.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerifyEmailPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly authService = inject(AuthService);

  readonly email = signal(
    this.route.snapshot.queryParamMap.get('email') ?? 'operator@robovac.io',
  );
  readonly resendCount = signal(0);
  readonly verified = signal(false);

  confirmVerification(): void {
    this.authService.setSession(`verified:${this.email()}`);
    this.verified.set(true);
  }

  resendVerification(): void {
    this.resendCount.update((count) => count + 1);
  }
}
