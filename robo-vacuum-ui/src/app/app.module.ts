import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  imports: [BrowserModule, App, AppRoutingModule, LayoutModule],
  exports: [App],
})
export class AppModule {}
