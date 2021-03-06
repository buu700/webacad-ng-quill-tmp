/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as Quill from 'quill';
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
export { QuillComponent };
if (false) {
    /** @type {?} */
    QuillComponent.prototype.theme;
    /** @type {?} */
    QuillComponent.prototype.options;
    /** @type {?} */
    QuillComponent.prototype.editor;
    /** @type {?} */
    QuillComponent.prototype.defaultContents;
    /** @type {?} */
    QuillComponent.prototype.isDisabled;
    /** @type {?} */
    QuillComponent.prototype.onTouched;
    /** @type {?} */
    QuillComponent.prototype.onChange;
    /** @type {?} */
    QuillComponent.prototype.$el;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHdlYmFjYWQvbmctcXVpbGwvIiwic291cmNlcyI6WyJxdWlsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFxQixLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUF1QixpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZFLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDOztJQStCOUIsd0JBQ1M7UUFBQSxRQUFHLEdBQUgsR0FBRztxQkFiVyxNQUFNO3VCQUdQLElBQUk7MEJBTUksS0FBSzt5QkFvSGIsZUFBUTt3QkFHWCxVQUFDLENBQU0sS0FBTztLQWxIN0I7Ozs7SUFHRyxpQ0FBUTs7Ozs7O1FBRWQsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFFbkMsSUFBSSxPQUFPLE9BQU8sQ0FBQyxLQUFLLEtBQUssV0FBVyxFQUFFO1lBQ3pDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUMzQjtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFekQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV2QyxJQUFJLE9BQU8sSUFBSSxDQUFDLGVBQWUsS0FBSyxXQUFXLEVBQUU7WUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzlDO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFO1lBQzdCLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDL0IsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtZQUMzRSxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDakIsQ0FBQyxDQUFDOzs7OztJQUlHLG9DQUFXOzs7Ozs7Ozs7SUFLWCxtQ0FBVTs7OztjQUFDLFFBQWE7UUFFOUIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2xDO2FBQU07WUFDTixJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQztTQUNoQzs7Ozs7O0lBSUsseUNBQWdCOzs7O2NBQUMsRUFBTztRQUU5QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQzs7Ozs7O0lBSWIsMENBQWlCOzs7O2NBQUMsRUFBTztRQUUvQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQzs7Ozs7O0lBR2QseUNBQWdCOzs7O2NBQUMsVUFBbUI7UUFFMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFFN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDakIsT0FBTztTQUNQO1FBRUQsSUFBSSxVQUFVLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3RCO2FBQU07WUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3JCOzs7OztJQUlRLGlDQUFROzs7SUFBbEI7UUFFQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNqQixPQUFPLFNBQVMsQ0FBQztTQUNqQjs7UUFFRCxJQUFNLFFBQVEsR0FBUSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRWhELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMzQixPQUFPLFNBQVMsQ0FBQztTQUNqQjtRQUVELE9BQU8sUUFBUSxDQUFDO0tBQ2hCOzs7OztJQUdTLGdDQUFPOzs7O0lBQWpCLFVBQWtCLFFBQWE7UUFFOUIsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDNUIsT0FBTyxLQUFLLENBQUM7U0FDYjs7UUFFRCxJQUFNLFFBQVEsR0FBa0IsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFN0QsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN4QixPQUFPLEtBQUssQ0FBQztTQUNiO1FBRUQsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFFO1lBQzdCLE9BQU8sS0FBSyxDQUFDO1NBQ2I7UUFFRCxJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtZQUNwQyxPQUFPLEtBQUssQ0FBQztTQUNiO1FBRUQsT0FBTyxJQUFJLENBQUM7S0FDWjs7Z0JBMUlELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLEVBQUU7b0JBQ1osU0FBUyxFQUFFO3dCQUNWOzRCQUNDLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxjQUFjOzRCQUMzQixLQUFLLEVBQUUsSUFBSTt5QkFDWDtxQkFDRDtpQkFDRDs7OztnQkFma0IsVUFBVTs7O3dCQW9CM0IsS0FBSzswQkFHTCxLQUFLOzt5QkF2QlA7O1NBZ0JhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBPbkRlc3Ryb3ksIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgKiBhcyBRdWlsbCBmcm9tICdxdWlsbCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnd2EtcXVpbGwnLFxuXHR0ZW1wbGF0ZTogJycsXG5cdHByb3ZpZGVyczogW1xuXHRcdHtcblx0XHRcdHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuXHRcdFx0dXNlRXhpc3Rpbmc6IFF1aWxsQ29tcG9uZW50LFxuXHRcdFx0bXVsdGk6IHRydWUsXG5cdFx0fSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgUXVpbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3JcbntcblxuXG5cdEBJbnB1dCgpXG5cdHB1YmxpYyB0aGVtZTogc3RyaW5nID0gJ3Nub3cnO1xuXG5cdEBJbnB1dCgpXG5cdHB1YmxpYyBvcHRpb25zOiBhbnkgPSBudWxsO1xuXG5cdHByb3RlY3RlZCBlZGl0b3I6IFF1aWxsLlF1aWxsO1xuXG5cdHByaXZhdGUgZGVmYXVsdENvbnRlbnRzOiBhbnl8dW5kZWZpbmVkO1xuXG5cdHByaXZhdGUgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSAkZWw6IEVsZW1lbnRSZWYsXG5cdCkge31cblxuXG5cdHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkXG5cdHtcblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zIHx8IHt9O1xuXG5cdFx0aWYgKHR5cGVvZiBvcHRpb25zLnRoZW1lID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0b3B0aW9ucy50aGVtZSA9IHRoaXMudGhlbWU7XG5cdFx0fVxuXG5cdFx0dGhpcy5lZGl0b3IgPSBuZXcgUXVpbGwodGhpcy4kZWwubmF0aXZlRWxlbWVudCwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnNldERpc2FibGVkU3RhdGUodGhpcy5pc0Rpc2FibGVkKTtcblxuXHRcdGlmICh0eXBlb2YgdGhpcy5kZWZhdWx0Q29udGVudHMgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHR0aGlzLmVkaXRvci5zZXRDb250ZW50cyh0aGlzLmRlZmF1bHRDb250ZW50cyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5lZGl0b3Iub24oJ3RleHQtY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5vbkNoYW5nZSh0aGlzLmdldFZhbHVlKCkpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy4kZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucWwtZWRpdG9yJykuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcblx0XHRcdHRoaXMub25Ub3VjaGVkKCk7XG5cdFx0fSk7XG5cdH1cblxuXG5cdHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkXG5cdHtcblx0fVxuXG5cblx0cHVibGljIHdyaXRlVmFsdWUoY29udGVudHM6IGFueSk6IHZvaWRcblx0e1xuXHRcdGlmICh0aGlzLmVkaXRvcikge1xuXHRcdFx0dGhpcy5lZGl0b3Iuc2V0Q29udGVudHMoY29udGVudHMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRlZmF1bHRDb250ZW50cyA9IGNvbnRlbnRzO1xuXHRcdH1cblx0fVxuXG5cblx0cHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWRcblx0e1xuXHRcdHRoaXMub25DaGFuZ2UgPSBmbjtcblx0fVxuXG5cblx0cHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkXG5cdHtcblx0XHR0aGlzLm9uVG91Y2hlZCA9IGZuO1xuXHR9XG5cblx0cHVibGljIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikgOiB2b2lkXG5cdHtcblx0XHR0aGlzLmlzRGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuXG5cdFx0aWYgKCF0aGlzLmVkaXRvcikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChpc0Rpc2FibGVkKSB7XG5cdFx0XHR0aGlzLmVkaXRvci5kaXNhYmxlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZWRpdG9yLmVuYWJsZSgpO1xuXHRcdH1cblx0fVxuXG5cblx0cHJvdGVjdGVkIGdldFZhbHVlKCk6IGFueXx1bmRlZmluZWRcblx0e1xuXHRcdGlmICghdGhpcy5lZGl0b3IpIHtcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY29udGVudHM6IGFueSA9IHRoaXMuZWRpdG9yLmdldENvbnRlbnRzKCk7XG5cblx0XHRpZiAodGhpcy5pc0VtcHR5KGNvbnRlbnRzKSkge1xuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29udGVudHM7XG5cdH1cblxuXG5cdHByb3RlY3RlZCBpc0VtcHR5KGNvbnRlbnRzOiBhbnkpOiBib29sZWFuXG5cdHtcblx0XHRpZiAoY29udGVudHMub3BzLmxlbmd0aCA+IDEpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBvcHNUeXBlczogQXJyYXk8c3RyaW5nPiA9IE9iamVjdC5rZXlzKGNvbnRlbnRzLm9wc1swXSk7XG5cblx0XHRpZiAob3BzVHlwZXMubGVuZ3RoID4gMSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmIChvcHNUeXBlc1swXSAhPT0gJ2luc2VydCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoY29udGVudHMub3BzWzBdLmluc2VydCAhPT0gJ1xcbicpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cblx0cHJvdGVjdGVkIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG5cblx0cHJpdmF0ZSBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuXG59XG4iXX0=