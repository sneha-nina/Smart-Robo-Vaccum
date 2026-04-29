import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusCardComponent } from './status-card';

describe('StatusCardComponent', () => {
  let fixture: ComponentFixture<StatusCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatusCardComponent);
    fixture.componentRef.setInput('title', 'Battery');
    fixture.componentRef.setInput('value', '84%');
    fixture.componentRef.setInput('tone', 'success');
    fixture.detectChanges();
  });

  it('renders key card content', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.textContent).toContain('Battery');
    expect(element.textContent).toContain('84%');
  });

  it('applies the selected tone class', () => {
    const article = fixture.nativeElement.querySelector('article') as HTMLElement;
    expect(article.className).toContain('tone-success');
  });
});
