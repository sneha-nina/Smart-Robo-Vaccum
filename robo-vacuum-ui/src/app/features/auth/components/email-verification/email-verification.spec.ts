import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmailVerificationComponent } from './email-verification';

describe('EmailVerificationComponent', () => {
  let fixture: ComponentFixture<EmailVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailVerificationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmailVerificationComponent);
    fixture.detectChanges();
  });

  it('emits verification and resend actions', () => {
    let confirmCount = 0;
    let resendCount = 0;

    fixture.componentInstance.verificationRequested.subscribe(() => {
      confirmCount += 1;
    });
    fixture.componentInstance.resendRequested.subscribe(() => {
      resendCount += 1;
    });

    const buttons = fixture.nativeElement.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
    buttons[0].click();
    buttons[1].click();

    expect(confirmCount).toBe(1);
    expect(resendCount).toBe(1);
  });
});
