import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CleaningMapComponent } from './cleaning-map';

describe('CleaningMapComponent', () => {
  let fixture: ComponentFixture<CleaningMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CleaningMapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CleaningMapComponent);
    fixture.componentRef.setInput('currentRoom', 'Kitchen');
    fixture.componentRef.setInput('progress', 52);
    fixture.detectChanges();
  });

  it('renders the current room and progress', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.textContent).toContain('Kitchen');
    expect(element.textContent).toContain('52% cleaned');
  });
});
