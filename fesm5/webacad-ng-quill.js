import { Component, ElementRef, Input, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as Quill from 'quill';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var QuillComponent = /** @class */ (function () {
    function QuillComponent($el) {
        this.$el = $el;
        this.theme = 'snow';
        this.options = null;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViYWNhZC1uZy1xdWlsbC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHdlYmFjYWQvbmctcXVpbGwvcXVpbGwuY29tcG9uZW50LnRzIiwibmc6Ly9Ad2ViYWNhZC9uZy1xdWlsbC9xdWlsbC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgT25EZXN0cm95LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0ICogYXMgUXVpbGwgZnJvbSAncXVpbGwnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3dhLXF1aWxsJyxcblx0dGVtcGxhdGU6ICcnLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcblx0XHRcdHVzZUV4aXN0aW5nOiBRdWlsbENvbXBvbmVudCxcblx0XHRcdG11bHRpOiB0cnVlLFxuXHRcdH0sXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIFF1aWxsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yXG57XG5cblxuXHRASW5wdXQoKVxuXHRwdWJsaWMgdGhlbWU6IHN0cmluZyA9ICdzbm93JztcblxuXHRASW5wdXQoKVxuXHRwdWJsaWMgb3B0aW9uczogYW55ID0gbnVsbDtcblxuXHRwcm90ZWN0ZWQgZWRpdG9yOiBRdWlsbDtcblxuXHRwcml2YXRlIGRlZmF1bHRDb250ZW50czogYW55fHVuZGVmaW5lZDtcblxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgJGVsOiBFbGVtZW50UmVmLFxuXHQpIHt9XG5cblxuXHRwdWJsaWMgbmdPbkluaXQoKTogdm9pZFxuXHR7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyB8fCB7fTtcblxuXHRcdGlmICh0eXBlb2Ygb3B0aW9ucy50aGVtZSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdG9wdGlvbnMudGhlbWUgPSB0aGlzLnRoZW1lO1xuXHRcdH1cblxuXHRcdHRoaXMuZWRpdG9yID0gbmV3IFF1aWxsKHRoaXMuJGVsLm5hdGl2ZUVsZW1lbnQsIG9wdGlvbnMpO1xuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLmRlZmF1bHRDb250ZW50cyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHRoaXMuZWRpdG9yLnNldENvbnRlbnRzKHRoaXMuZGVmYXVsdENvbnRlbnRzKTtcblx0XHR9XG5cblx0XHR0aGlzLmVkaXRvci5vbigndGV4dC1jaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLm9uQ2hhbmdlKHRoaXMuZ2V0VmFsdWUoKSk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLiRlbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xbC1lZGl0b3InKS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5vblRvdWNoZWQoKTtcblx0XHR9KTtcblx0fVxuXG5cblx0cHVibGljIG5nT25EZXN0cm95KCk6IHZvaWRcblx0e1xuXHR9XG5cblxuXHRwdWJsaWMgd3JpdGVWYWx1ZShjb250ZW50czogYW55KTogdm9pZFxuXHR7XG5cdFx0aWYgKHRoaXMuZWRpdG9yKSB7XG5cdFx0XHR0aGlzLmVkaXRvci5zZXRDb250ZW50cyhjb250ZW50cyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZGVmYXVsdENvbnRlbnRzID0gY29udGVudHM7XG5cdFx0fVxuXHR9XG5cblxuXHRwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZFxuXHR7XG5cdFx0dGhpcy5vbkNoYW5nZSA9IGZuO1xuXHR9XG5cblxuXHRwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWRcblx0e1xuXHRcdHRoaXMub25Ub3VjaGVkID0gZm47XG5cdH1cblxuXG5cdHByb3RlY3RlZCBnZXRWYWx1ZSgpOiBhbnl8dW5kZWZpbmVkXG5cdHtcblx0XHRpZiAoIXRoaXMuZWRpdG9yKSB7XG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNvbnRlbnRzOiBhbnkgPSB0aGlzLmVkaXRvci5nZXRDb250ZW50cygpO1xuXG5cdFx0aWYgKHRoaXMuaXNFbXB0eShjb250ZW50cykpIHtcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbnRlbnRzO1xuXHR9XG5cblxuXHRwcm90ZWN0ZWQgaXNFbXB0eShjb250ZW50czogYW55KTogYm9vbGVhblxuXHR7XG5cdFx0aWYgKGNvbnRlbnRzLm9wcy5sZW5ndGggPiAxKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb3BzVHlwZXM6IEFycmF5PHN0cmluZz4gPSBPYmplY3Qua2V5cyhjb250ZW50cy5vcHNbMF0pO1xuXG5cdFx0aWYgKG9wc1R5cGVzLmxlbmd0aCA+IDEpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAob3BzVHlwZXNbMF0gIT09ICdpbnNlcnQnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbnRlbnRzLm9wc1swXS5pbnNlcnQgIT09ICdcXG4nKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXG5cdHByb3RlY3RlZCBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuXG5cdHByaXZhdGUgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcblxufVxuIiwiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7UXVpbGxDb21wb25lbnR9IGZyb20gJy4vcXVpbGwuY29tcG9uZW50JztcblxuXG5ATmdNb2R1bGUoe1xuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRRdWlsbENvbXBvbmVudCxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdFF1aWxsQ29tcG9uZW50LFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBRdWlsbE1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7SUErQkMsd0JBQ1M7UUFBQSxRQUFHLEdBQUgsR0FBRztxQkFYVyxNQUFNO3VCQUdQLElBQUk7eUJBdUdKLGVBQVE7d0JBR1gsVUFBQyxDQUFNLEtBQU87S0FqRzdCOzs7O0lBR0csaUNBQVE7Ozs7OztRQUVkLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1FBRW5DLElBQUksT0FBTyxPQUFPLENBQUMsS0FBSyxLQUFLLFdBQVcsRUFBRTtZQUN6QyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDM0I7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXpELElBQUksT0FBTyxJQUFJLENBQUMsZUFBZSxLQUFLLFdBQVcsRUFBRTtZQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDOUM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUU7WUFDN0IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUMvQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO1lBQzNFLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNqQixDQUFDLENBQUM7Ozs7O0lBSUcsb0NBQVc7Ozs7Ozs7OztJQUtYLG1DQUFVOzs7O2NBQUMsUUFBYTtRQUU5QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbEM7YUFBTTtZQUNOLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDO1NBQ2hDOzs7Ozs7SUFJSyx5Q0FBZ0I7Ozs7Y0FBQyxFQUFPO1FBRTlCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDOzs7Ozs7SUFJYiwwQ0FBaUI7Ozs7Y0FBQyxFQUFPO1FBRS9CLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDOzs7OztJQUlYLGlDQUFROzs7SUFBbEI7UUFFQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNqQixPQUFPLFNBQVMsQ0FBQztTQUNqQjs7UUFFRCxJQUFNLFFBQVEsR0FBUSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRWhELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMzQixPQUFPLFNBQVMsQ0FBQztTQUNqQjtRQUVELE9BQU8sUUFBUSxDQUFDO0tBQ2hCOzs7OztJQUdTLGdDQUFPOzs7O0lBQWpCLFVBQWtCLFFBQWE7UUFFOUIsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDNUIsT0FBTyxLQUFLLENBQUM7U0FDYjs7UUFFRCxJQUFNLFFBQVEsR0FBa0IsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFN0QsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN4QixPQUFPLEtBQUssQ0FBQztTQUNiO1FBRUQsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFFO1lBQzdCLE9BQU8sS0FBSyxDQUFDO1NBQ2I7UUFFRCxJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtZQUNwQyxPQUFPLEtBQUssQ0FBQztTQUNiO1FBRUQsT0FBTyxJQUFJLENBQUM7S0FDWjs7Z0JBdkhELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLEVBQUU7b0JBQ1osU0FBUyxFQUFFO3dCQUNWOzRCQUNDLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxjQUFjOzRCQUMzQixLQUFLLEVBQUUsSUFBSTt5QkFDWDtxQkFDRDtpQkFDRDs7OztnQkFma0IsVUFBVTs7O3dCQW9CM0IsS0FBSzswQkFHTCxLQUFLOzt5QkF2QlA7Ozs7Ozs7QUNBQTs7OztnQkFLQyxRQUFRLFNBQUM7b0JBQ1QsWUFBWSxFQUFFO3dCQUNiLGNBQWM7cUJBQ2Q7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLGNBQWM7cUJBQ2Q7aUJBQ0Q7O3NCQVpEOzs7Ozs7Ozs7Ozs7Ozs7In0=