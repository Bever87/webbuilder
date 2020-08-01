import { Component } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
    selector: 'solved-shared-wiz-shell',
    templateUrl: './shared-wizard-shell.component.html',
    styleUrls: ['./shared-wizard-shell.component.scss']
})
export class SharedWizardShellComponent {
    right = 350;
    minlimit = 100;
    maxlimit = 750;

    onResizeEnd(event: ResizeEvent): void {
        if (event.edges.right) {
            const checkValue = this.right + (+event.edges.right);
            if (checkValue < this.minlimit) {
                this.right = this.minlimit;
            } else {
                if (checkValue > this.maxlimit) {
                    this.right = this.maxlimit
                } else {
                    this.right += +event.edges.right;
                }
            }
        }
    }
}