import {
    Component,
    OnInit,
    Input,
    ViewEncapsulation,
    forwardRef,
    ViewChild,
    ElementRef,
    Output,
    EventEmitter
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import {
    MomentDateAdapter,
    MAT_MOMENT_DATE_ADAPTER_OPTIONS
} from '@angular/material-moment-adapter';
import {
    DateAdapter,
    MAT_DATE_FORMATS,
    MAT_DATE_LOCALE
} from '@angular/material/core';
import { isMoment } from 'moment';

@Component({
    selector: 'taf-datepicker',
    templateUrl: './datepicker.component.html',
    styleUrls: ['./datepicker.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TafDatepickerComponent),
            multi: true
        },
        { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
        },
        {
            provide: MAT_DATE_FORMATS,
            useValue: {
                parse: {
                    dateInput: ['l', 'LL']
                },
                display: {
                    dateInput: 'L',
                    monthYearLabel: 'MMM YYYY',
                    dateA11yLabel: 'LL',
                    monthYearA11yLabel: 'MMMM YYYY'
                }
            }
        }
    ]
})
export class TafDatepickerComponent implements OnInit, ControlValueAccessor {
    @Input() placeholder: string;
    @Input() width: string;
    @Output() valueChanged = new EventEmitter<any>();

    @ViewChild('input', { static: true }) input: ElementRef;

    val = null;
    val1 = null;
    val2 = null;
    minDate: Date;
    changeIcon: Boolean = true;
    date = new FormControl(new Date());

    private _range: boolean;

    constructor() {}

    ngOnInit() {}

    @Input()
    get range() {
        return this._range;
    }
    set range(value: any) {
        this._range = this.coerceBooleanProperty(value);
    }

    private coerceBooleanProperty(value: any) {
        return value != null && `${value}` !== 'false';
    }

    set value(val) {
        if (val && val.length > 1) {
            this.value1 = val[0];
            this.value2 = val[1];
        }

        if (
            isMoment(val) &&
            ((val.creationData().input as string).length === 10 ||
                this.isMomentPick(val.creationData().input)) &&
            this.val !== val
        ) {
            this.val = val.toDate();
            this.onChange(val.toDate());
            this.onTouch(val.toDate());
            this.onChangeValue();
        } else if (
            val !== undefined &&
            val !== null &&
            val !== '' &&
            (val.length === 10 || val instanceof Date) &&
            this.val !== val
        ) {
            this.val = val;
            this.onChange(val);
            this.onTouch(val);
            this.onChangeValue();
        }
    }

    set value1(val1) {
        if (
            isMoment(val1) &&
            ((val1.creationData().input as string).length === 10 ||
                this.isMomentPick(val1.creationData().input)) &&
            this.val1 !== val1
        ) {
            this.val1 = val1.toDate();
            let values = [
                this.val1,
                this.val1
            ];
            this.onChange(values);
            this.onTouch(values);
            this.onChangeValue2();
        } else if (
            val1 !== undefined &&
            val1 !== null &&
            val1 !== '' &&
            (val1.length === 10 || val1 instanceof Date) &&
            this.val1 !== val1
        ) {
            this.val1 = val1;
            let values = [
                this.val1,
                this.val1
            ];
            this.onChange(values);
            this.onTouch(values);
            this.onChangeValue2();
        }
    }

    set value2(val2) {
        if (
            isMoment(val2) &&
            ((val2.creationData().input as string).length === 10 ||
                this.isMomentPick(val2.creationData().input)) &&
            this.val2 !== val2
        ) {
            this.val2 = val2.toDate();
            let values = [
                this.val1,
                this.val2
            ];
            this.onChange(values);
            this.onTouch(values);
            this.onChangeValue2();
        } else if (
            val2 !== undefined &&
            val2 !== null &&
            val2 !== '' &&
            (val2.length === 10 || val2 instanceof Date) &&
            this.val2 !== val2
        ) {
            this.val2 = val2;
            let values = [
                this.val1,
                this.val2
            ];
            this.onChange(values);
            this.onTouch(values);
            this.onChangeValue2();
        }
    }

    onChange: any = () => {};
    onTouch: any = () => {};

    writeValue(value: any) {
        this.value = value;
    }

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouch = fn;
    }

    onChangeValue2() {
        this.changeIcon = !this.changeIcon;
        this.minDate = this.val1;
    }

    onChangeValue() {
        const inputEl = this.input.nativeElement as HTMLInputElement;

        if (inputEl.value) {
            const v = inputEl.value.split('/');
            const year = parseInt(v[2], 10),
                month = parseInt(v[1], 10) - 1,
                day = parseInt(v[0], 10);
            const date = new Date(year, month, day);

            if (date.getTime() !== this.val.getTime()) {
                this.value = date;
            }

            this.valueChanged.emit(date);
        }
    }

    applyMask(e: KeyboardEvent) {
        const inputEl = this.input.nativeElement as HTMLInputElement;
        const v = inputEl.value;

        if (e.key === 'Backspace') {
            return;
        }

        if (v.match(/^\d{2}$/) !== null) {
            inputEl.value = v + '/';
        } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
            inputEl.value = v + '/';
        }
    }

    private isMomentPick(val) {
        return (
            val['date'] !== undefined &&
            val['month'] !== undefined &&
            val['year'] !== undefined
        );
    }
}
