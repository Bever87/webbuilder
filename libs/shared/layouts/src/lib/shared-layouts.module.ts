import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMainLayoutComponent } from './main-layout/main-layout.component';
import { SharedMainLayoutHeaderComponent } from './main-layout/header/main-layout-header.component';
import { SharedMainLayoutMenuComponent } from './main-layout/menu/main-layout-menu.component';
import { NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedSearchModule } from '@solved/shared/search';

@NgModule({
  declarations: [SharedMainLayoutComponent, SharedMainLayoutHeaderComponent, SharedMainLayoutMenuComponent],
  imports: [CommonModule, NgbTooltipModule, SharedSearchModule],
  exports: [SharedMainLayoutComponent]
})
export class SharedLayoutsModule {}
