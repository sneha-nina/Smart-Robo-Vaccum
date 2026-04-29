import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

export type AuthFormMode = 'login' | 'signup';

export interface AuthFormValue {
  confirmPassword?: string;
  displayName?: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './auth-form.html',
  styleUrl: './auth-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormComponent {
  private readonly formBuilder = inject(FormBuilder);

  readonly mode = input<AuthFormMode>('login');
  readonly loading = input(false);
  readonly formSubmitted = output<AuthFormValue>();
  readonly formError = signal<string | null>(null);

  readonly showSignupFields = computed(() => this.mode() === 'signup');
  readonly heading = computed(() =>
    this.mode() === 'signup' ? 'Create your Robo Vacuum account' : 'Welcome back',
  );
  readonly submitLabel = computed(() =>
    this.mode() === 'signup' ? 'Create account' : 'Sign in',
  );
  readonly alternateRoute = computed(() =>
    this.mode() === 'signup' ? '/login' : '/signup',
  );
  readonly alternateLabel = computed(() =>
    this.mode() === 'signup'
      ? 'Already have an account? Sign in'
      : 'Need an account? Create one',
  );

  readonly form = this.formBuilder.nonNullable.group({
    displayName: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: [''],
  });

  submit(): void {
    this.formError.set(null);
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      this.formError.set('Please complete the required fields before continuing.');
      return;
    }

    const value = this.form.getRawValue();

    if (this.showSignupFields()) {
      if (!value.displayName.trim()) {
        this.formError.set('Display name is required to create an account.');
        return;
      }

      if (value.password !== value.confirmPassword) {
        this.formError.set('Passwords must match before continuing.');
        return;
      }
    }

    this.formSubmitted.emit({
      email: value.email.trim(),
      password: value.password,
      displayName: value.displayName.trim() || undefined,
      confirmPassword: value.confirmPassword || undefined,
    });
  }

  hasError(controlName: 'displayName' | 'email' | 'password' | 'confirmPassword'): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }
}
