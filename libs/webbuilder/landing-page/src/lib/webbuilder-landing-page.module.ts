import { SharedSearchModule } from '@solved/shared/search';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedLayoutsModule } from '@solved/shared/layouts';

@NgModule({
  declarations: [LandingPageComponent],
  exports: [LandingPageComponent],
  imports: [CommonModule, SharedSearchModule, SharedLayoutsModule],
})
export class WebbuilderLandingPageModule {}
