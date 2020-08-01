import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router'; // CLI imports router
import { LandingPageComponent } from '@solved/webbuilder/landing-page';
import { WizardShellComponent } from './wizard-shell/wizard-shell.component';

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingPageComponent
  },
  {
    path: '',
    component: WizardShellComponent,
    children: [
      {
        path: 'create',
        loadChildren: () =>
          import('@solved/webbuilder/wizard-page').then((m) => m.WebbuilderWizardPageModule)
      }
    ]
  }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }