import { Component, Output, EventEmitter, Input } from '@angular/core';
import { COLOR_SCHEMES, ALL_THEMES, ALL_LAYOUTS } from '@solved/shared/models';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'solved-wiz-page-step-1',
    templateUrl: './wiz-page-step1.component.html',
    styleUrls: ['./wiz-page-step1.component.scss']
})
export class WizardPageStep1Component {
    colors = COLOR_SCHEMES;
    themes = ALL_THEMES;
    layouts = ALL_LAYOUTS;
    @Input()
    form!: FormGroup;
    @Output()
    readonly colorSet: EventEmitter<any> = new EventEmitter<any>();

    setColor(color: any) {
        this.colorSet.emit(color);
    }
}