import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManualControlPadComponent } from './manual-control-pad';

describe('ManualControlPadComponent', () => {
  let fixture: ComponentFixture<ManualControlPadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManualControlPadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ManualControlPadComponent);
    fixture.detectChanges();
  });

  it('emits movement commands when buttons are pressed', () => {
    const commands: string[] = [];
    fixture.componentInstance.commandIssued.subscribe((command) => commands.push(command));

    const buttons = fixture.nativeElement.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
    buttons[0].click();
    buttons[4].click();

    expect(commands).toEqual(['forward', 'backward']);
  });
});
