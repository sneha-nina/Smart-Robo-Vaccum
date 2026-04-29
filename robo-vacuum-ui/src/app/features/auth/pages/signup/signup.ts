import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  AuthFormComponent,
  AuthFormValue,
} from '../../components/auth-form/auth-form';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [AuthFormComponent, RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupPageComponent {
  private readonly router = inject(Router);

  readonly pendingEmail = signal<string | null>(null);

  async onSignup(account: AuthFormValue): Promise<void> {
    this.pendingEmail.set(account.email);
    await this.router.navigate(['/verify-email'], {
      queryParams: { email: account.email },
    });
  }
}
