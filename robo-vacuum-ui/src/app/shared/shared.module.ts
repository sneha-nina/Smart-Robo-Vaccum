import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconButtonComponent } from './components/icon-button/icon-button';
import { LoaderComponent } from './components/loader/loader';
import { ProgressBarComponent } from './components/progress-bar/progress-bar';
import { StatusCardComponent } from './components/status-card/status-card';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button';

const SHARED_STANDALONE_COMPONENTS = [
  LoaderComponent,
  StatusCardComponent,
  ProgressBarComponent,
  ToggleButtonComponent,
  IconButtonComponent,
] as const;

@NgModule({
  imports: [CommonModule, ...SHARED_STANDALONE_COMPONENTS],
  exports: [...SHARED_STANDALONE_COMPONENTS],
})
export class SharedModule {}
