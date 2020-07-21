import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ShellComponent } from './shell/shell.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedLayoutsModule } from '@solved/shared/layouts';
import { AppRoutingModule } from './app.routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [AppComponent, ShellComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    SharedLayoutsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
