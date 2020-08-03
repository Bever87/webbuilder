import { Component, OnInit, OnDestroy, Output, EventEmitter, Inject } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { COLOR_SCHEMES, ALL_THEMES, ALL_LAYOUTS } from '@solved/shared/models';

@Component({
    selector: 'solved-wiz-page',
    templateUrl: './wizard-page.component.html',
    styleUrls: ['./wizard-page.component.scss']
})
export class CreateWizardPageComponent implements OnInit, OnDestroy {
    currentStep = 1;
    stepsList: number[] = [1, 2, 3];
    form: FormGroup;
    destroy$ = new Subject();

    

    @Output()
    readonly formUpdated: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
        this.form = new FormGroup({
            name: new FormControl(),
            zipCode: new FormControl(),
            primaryColor: new FormControl(),
            secondaryColor: new FormControl(),
            selectedColor: new FormControl('color1'),
            selectedTheme: new FormControl('light'),
            selectedLayout: new FormControl('layout1')
        })
    }

    ngOnInit() {
        this.form.valueChanges.pipe(
            debounceTime(500),
            takeUntil(this.destroy$)
        ).subscribe((value) => {
            this.formUpdated.emit(value);
        });
        //  
    }

    setColors(color: any) {
        this.form.patchValue({
            primaryColor: color.primary,
            secondaryColor: color.secondary
        })
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}