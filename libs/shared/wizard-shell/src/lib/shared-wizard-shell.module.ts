import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedWizardShellComponent } from './shared-wizard-shell/shared-wizard-shell.component';

@NgModule({
  declarations: [SharedWizardShellComponent],
   exports: [SharedWizardShellComponent],
  imports: [CommonModule],
})
export class SharedWizardShellModule {}
