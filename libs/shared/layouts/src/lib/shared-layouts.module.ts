import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMainLayoutComponent } from './main-layout/main-layout.component';
import { SharedMainLayoutHeaderComponent } from './main-layout/header/main-layout-header.component';
import { SharedMainLayoutAboutComponent } from './main-layout/about/main-layout-about.component';
import { SharedMainLayoutMenuComponent } from './main-layout/menu/main-layout-menu.component';
import { NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedSearchModule } from '@solved/shared/search';

const COMPONENTS = [SharedMainLayoutComponent, SharedMainLayoutHeaderComponent, SharedMainLayoutMenuComponent, SharedMainLayoutAboutComponent];
@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, NgbTooltipModule, SharedSearchModule],
  exports: COMPONENTS
})
export class SharedLayoutsModule {}
