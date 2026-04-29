import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-email-verification',
  standalone: true,
  templateUrl: './email-verification.html',
  styleUrl: './email-verification.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailVerificationComponent {
  readonly email = input('operator@robovac.io');
  readonly resendCount = input(0);
  readonly verified = input(false);
  readonly verificationRequested = output<void>();
  readonly resendRequested = output<void>();
}
