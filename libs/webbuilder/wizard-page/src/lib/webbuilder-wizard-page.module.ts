import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebbuilderWizardPageRoutingModule } from './webbuilder-wizard-page.routing';
import { CreateWizardPageComponent } from './wizard-page/wizard-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateWizardPageComponent],
  exports: [CreateWizardPageComponent],
  imports: [CommonModule, WebbuilderWizardPageRoutingModule, ReactiveFormsModule],
})
export class WebbuilderWizardPageModule {}
