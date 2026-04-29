import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusSummaryComponent } from './status-summary';

describe('StatusSummaryComponent', () => {
  let fixture: ComponentFixture<StatusSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusSummaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatusSummaryComponent);
    fixture.componentRef.setInput('batteryLevel', 88);
    fixture.componentRef.setInput('currentRoom', 'Hall');
    fixture.componentRef.setInput('currentState', 'cleaning');
    fixture.detectChanges();
  });

  it('renders key summary values', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.textContent).toContain('88%');
    expect(element.textContent).toContain('Hall');
    expect(element.textContent).toContain('cleaning');
  });
});
