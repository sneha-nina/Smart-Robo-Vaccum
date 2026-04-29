import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import {
  AuthFormComponent,
  AuthFormValue,
} from '../../components/auth-form/auth-form';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [AuthFormComponent, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly lastLoginEmail = signal<string | null>(null);

  async onLogin(credentials: AuthFormValue): Promise<void> {
    this.authService.setSession(`demo-token:${credentials.email}`);
    this.lastLoginEmail.set(credentials.email);
    await this.router.navigate(['/dashboard']);
  }
}
