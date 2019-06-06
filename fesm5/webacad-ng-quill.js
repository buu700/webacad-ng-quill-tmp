import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as Quill from 'quill';
import { Component, ElementRef, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var QuillComponent = /** @class */ (function () {
    function QuillComponent($el) {
        this.$el = $el;
        this.theme = 'snow';
        this.options = null;
        this.isDisabled = false;
        this.onTouched = function () { };
        this.onChange = function (_) { };
    }
    /**
     * @return {?}
     */
    QuillComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var options = this.options || {};
        if (typeof options.theme === 'undefined') {
            options.theme = this.theme;
        }
        this.editor = new Quill(this.$el.nativeElement, options);
        this.setDisabledState(this.isDisabled);
        if (typeof this.defaultContents !== 'undefined') {
            this.editor.setContents(this.defaultContents);
        }
        this.editor.on('text-change', function () {
            _this.onChange(_this.getValue());
        });
        this.$el.nativeElement.querySelector('.ql-editor').addEventListener('blur', function () {
            _this.onTouched();
        });
    };
    /**
     * @return {?}
     */
    QuillComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} contents
     * @return {?}
     */
    QuillComponent.prototype.writeValue = /**
     * @param {?} contents
     * @return {?}
     */
    function (contents) {
        if (this.editor) {
            this.editor.setContents(contents);
        }
        else {
            this.defaultContents = contents;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    QuillComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    QuillComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    QuillComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
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
    };
    /**
     * @return {?}
     */
    QuillComponent.prototype.getValue = /**
     * @return {?}
     */
    function () {
        if (!this.editor) {
            return undefined;
        }
        /** @type {?} */
        var contents = this.editor.getContents();
        if (this.isEmpty(contents)) {
            return undefined;
        }
        return contents;
    };
    /**
     * @param {?} contents
     * @return {?}
     */
    QuillComponent.prototype.isEmpty = /**
     * @param {?} contents
     * @return {?}
     */
    function (contents) {
        if (contents.ops.length > 1) {
            return false;
        }
        /** @type {?} */
        var opsTypes = Object.keys(contents.ops[0]);
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
    };
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
    QuillComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    QuillComponent.propDecorators = {
        theme: [{ type: Input }],
        options: [{ type: Input }]
    };
    return QuillComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var QuillModule = /** @class */ (function () {
    function QuillModule() {
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
    return QuillModule;
}());

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