import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebbuilderWizardPageRoutingModule } from './webbuilder-wizard-page.routing';
import { CreateWizardPageComponent } from './wizard-page/wizard-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WizardPageStep1Component } from './wizard-page/step1/wiz-page-step1.component';

@NgModule({
  declarations: [CreateWizardPageComponent, WizardPageStep1Component],
  exports: [CreateWizardPageComponent],
  imports: [CommonModule, WebbuilderWizardPageRoutingModule, ReactiveFormsModule],
})
export class WebbuilderWizardPageModule {}
