import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as Quill from 'quill';
import { Component, ElementRef, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class QuillComponent {
    /**
     * @param {?} $el
     */
    constructor($el) {
        this.$el = $el;
        this.theme = 'snow';
        this.options = null;
        this.isDisabled = false;
        this.onTouched = () => { };
        this.onChange = (_) => { };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const options = this.options || {};
        if (typeof options.theme === 'undefined') {
            options.theme = this.theme;
        }
        this.editor = new Quill(this.$el.nativeElement, options);
        this.setDisabledState(this.isDisabled);
        if (typeof this.defaultContents !== 'undefined') {
            this.editor.setContents(this.defaultContents);
        }
        this.editor.on('text-change', () => {
            this.onChange(this.getValue());
        });
        this.$el.nativeElement.querySelector('.ql-editor').addEventListener('blur', () => {
            this.onTouched();
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
    /**
     * @param {?} contents
     * @return {?}
     */
    writeValue(contents) {
        if (this.editor) {
            this.editor.setContents(contents);
        }
        else {
            this.defaultContents = contents;
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
        if (!this.editor) {
            return;
        }
        if (isDisabled) {
            this.editor.disable();
        }
        else {
            this.editor.enable();
        }
    }
    /**
     * @return {?}
     */
    getValue() {
        if (!this.editor) {
            return undefined;
        }
        /** @type {?} */
        const contents = this.editor.getContents();
        if (this.isEmpty(contents)) {
            return undefined;
        }
        return contents;
    }
    /**
     * @param {?} contents
     * @return {?}
     */
    isEmpty(contents) {
        if (contents.ops.length > 1) {
            return false;
        }
        /** @type {?} */
        const opsTypes = Object.keys(contents.ops[0]);
        if (opsTypes.length > 1) {
            return false;
        }
        if (opsTypes[0] !== 'insert') {
            return false;
        }
        if (contents.ops[0].insert !== '\n') {
            return false;
        }
        return true;
    }
}
QuillComponent.decorators = [
    { type: Component, args: [{
                selector: 'wa-quill',
                template: '',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: QuillComponent,
                        multi: true,
                    },
                ]
            }] }
];
/** @nocollapse */
QuillComponent.ctorParameters = () => [
    { type: ElementRef }
];
QuillComponent.propDecorators = {
    theme: [{ type: Input }],
    options: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class QuillModule {
}
QuillModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    QuillComponent,
                ],
                exports: [
                    QuillComponent,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { QuillComponent, QuillModule };

//# sourceMappingURL=webacad-ng-quill.js.map