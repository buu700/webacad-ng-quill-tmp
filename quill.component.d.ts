import { ElementRef, OnInit, OnDestroy } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as Quill from 'quill';
export declare class QuillComponent implements OnInit, OnDestroy, ControlValueAccessor {
    private $el;
    theme: string;
    options: any;
    protected editor: Quill.Quill;
    private defaultContents;
    private isDisabled;
    constructor($el: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    writeValue(contents: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    protected getValue(): any | undefined;
    protected isEmpty(contents: any): boolean;
    protected onTouched: () => void;
    private onChange;
}
