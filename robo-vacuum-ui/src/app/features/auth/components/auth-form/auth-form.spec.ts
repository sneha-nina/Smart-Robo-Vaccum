import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AuthFormComponent } from './auth-form';

describe('AuthFormComponent', () => {
  let fixture: ComponentFixture<AuthFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthFormComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthFormComponent);
    fixture.detectChanges();
  });

  it('renders signup-only fields in signup mode', () => {
    fixture.componentRef.setInput('mode', 'signup');
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.textContent).toContain('Display name');
    expect(element.textContent).toContain('Confirm password');
  });

  it('emits the submitted login form value', () => {
    const emittedValues: unknown[] = [];
    fixture.componentInstance.formSubmitted.subscribe((value) => emittedValues.push(value));

    fixture.componentInstance.form.setValue({
      displayName: '',
      email: 'pilot@robovac.io',
      password: 'password123',
      confirmPassword: '',
    });

    fixture.componentInstance.submit();

    expect(emittedValues).toEqual([
      {
        email: 'pilot@robovac.io',
        password: 'password123',
        displayName: undefined,
        confirmPassword: undefined,
      },
    ]);
  });
});
