import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CreateWizardPageComponent } from './wizard-page/wizard-page.component';

const ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: CreateWizardPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class WebbuilderWizardPageRoutingModule {}
