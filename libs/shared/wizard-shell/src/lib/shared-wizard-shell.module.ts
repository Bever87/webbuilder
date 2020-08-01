import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedWizardShellComponent } from './shared-wizard-shell/shared-wizard-shell.component';
import { ResizableModule } from 'angular-resizable-element';
import { WebbuilderWizardPageModule } from '@solved/webbuilder/wizard-page';
@NgModule({
  declarations: [SharedWizardShellComponent],
   exports: [SharedWizardShellComponent],
  imports: [CommonModule, ResizableModule, RouterModule, WebbuilderWizardPageModule],
})
export class SharedWizardShellModule {}
