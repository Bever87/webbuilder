import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMainLayoutComponent } from './main-layout/main-layout.component';
import { SharedMainLayoutHeaderComponent } from './main-layout/header/main-layout-header.component';
import { SharedMainLayoutMenuComponent } from './main-layout/menu/main-layout-menu.component';

@NgModule({
  declarations: [SharedMainLayoutComponent, SharedMainLayoutHeaderComponent, SharedMainLayoutMenuComponent],
  imports: [CommonModule],
  exports: [SharedMainLayoutComponent]
})
export class SharedLayoutsModule {}
