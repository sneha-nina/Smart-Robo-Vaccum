import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthFormComponent } from './components/auth-form/auth-form';
import { EmailVerificationComponent } from './components/email-verification/email-verification';
import { LoginPageComponent } from './pages/login/login';
import { SignupPageComponent } from './pages/signup/signup';
import { VerifyEmailPageComponent } from './pages/verify-email/verify-email';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    AuthFormComponent,
    EmailVerificationComponent,
    LoginPageComponent,
    SignupPageComponent,
    VerifyEmailPageComponent,
  ],
  exports: [
    AuthFormComponent,
    EmailVerificationComponent,
    LoginPageComponent,
    SignupPageComponent,
    VerifyEmailPageComponent,
  ],
})
export class AuthModule {}
