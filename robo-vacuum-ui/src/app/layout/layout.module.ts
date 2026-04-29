import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthLayoutComponent } from './auth-layout/auth-layout';
import { MainLayoutComponent } from './main-layout/main-layout';

@NgModule({
  imports: [CommonModule, AuthLayoutComponent, MainLayoutComponent],
  exports: [AuthLayoutComponent, MainLayoutComponent],
})
export class LayoutModule {}
