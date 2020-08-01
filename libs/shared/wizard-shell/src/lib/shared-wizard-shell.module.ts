import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedWizardShellComponent } from './shared-wizard-shell/shared-wizard-shell.component';
import { ResizableModule } from 'angular-resizable-element';

@NgModule({
  declarations: [SharedWizardShellComponent],
   exports: [SharedWizardShellComponent],
  imports: [CommonModule, ResizableModule],
})
export class SharedWizardShellModule {}
