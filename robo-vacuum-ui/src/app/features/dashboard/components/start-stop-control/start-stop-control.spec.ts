import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartStopControlComponent } from './start-stop-control';

describe('StartStopControlComponent', () => {
  let fixture: ComponentFixture<StartStopControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartStopControlComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StartStopControlComponent);
    fixture.detectChanges();
  });

  it('emits start when the start button is pressed', () => {
    let startCount = 0;
    fixture.componentInstance.startRequested.subscribe(() => {
      startCount += 1;
    });

    const buttons = fixture.nativeElement.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
    buttons[1].click();

    expect(startCount).toBe(1);
  });
});
