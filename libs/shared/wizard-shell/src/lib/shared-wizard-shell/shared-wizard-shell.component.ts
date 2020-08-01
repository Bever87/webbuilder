import { Component } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
    selector: 'solved-shared-wiz-shell',
    templateUrl: './shared-wizard-shell.component.html',
    styleUrls: ['./shared-wizard-shell.component.scss']
})
export class SharedWizardShellComponent {
    panelWidth = 350;
    minlimit = 100;
    maxlimit = 750;

    onResize(event: ResizeEvent): void {
        if (event.rectangle.width) {
            if (event.rectangle.width < this.minlimit) {
                this.panelWidth = this.minlimit;
            } else {
                if (event.rectangle.width > this.maxlimit) {
                    this.panelWidth = this.maxlimit
                } else {
                    this.panelWidth = event.rectangle.width;
                }
            }
        }
    }
}