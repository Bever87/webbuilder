import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  declarations: [SharedMainLayoutComponent],
  imports: [CommonModule],
  exports: [SharedMainLayoutComponent]
})
export class SharedLayoutsModule {}
