import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CleaningModeSelectorComponent } from './components/cleaning-mode-selector/cleaning-mode-selector';
import { ManualControlPadComponent } from './components/manual-control-pad/manual-control-pad';
import { MovementPatternSelectorComponent } from './components/movement-pattern-selector/movement-pattern-selector';
import { PowerModeSelectorComponent } from './components/power-mode-selector/power-mode-selector';

@NgModule({
  imports: [
    CommonModule,
    CleaningModeSelectorComponent,
    PowerModeSelectorComponent,
    ManualControlPadComponent,
    MovementPatternSelectorComponent,
  ],
  exports: [
    CleaningModeSelectorComponent,
    PowerModeSelectorComponent,
    ManualControlPadComponent,
    MovementPatternSelectorComponent,
  ],
})
export class ControlModule {}
