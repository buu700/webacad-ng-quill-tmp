/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as Quill from 'quill';
export class QuillComponent {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHdlYmFjYWQvbmctcXVpbGwvIiwic291cmNlcyI6WyJxdWlsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFxQixLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUF1QixpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZFLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBYy9CLE1BQU07Ozs7SUFpQkwsWUFDUztRQUFBLFFBQUcsR0FBSCxHQUFHO3FCQWJXLE1BQU07dUJBR1AsSUFBSTswQkFNSSxLQUFLO3lCQW9IYixHQUFHLEVBQUUsSUFBRzt3QkFHWCxDQUFDLENBQU0sRUFBRSxFQUFFLElBQUc7S0FsSDdCOzs7O0lBR0csUUFBUTs7UUFFZCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUVuQyxJQUFJLE9BQU8sT0FBTyxDQUFDLEtBQUssS0FBSyxXQUFXLEVBQUU7WUFDekMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQzNCO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV6RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXZDLElBQUksT0FBTyxJQUFJLENBQUMsZUFBZSxLQUFLLFdBQVcsRUFBRTtZQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDOUM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDL0IsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDaEYsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2pCLENBQUMsQ0FBQzs7Ozs7SUFJRyxXQUFXOzs7Ozs7SUFLWCxVQUFVLENBQUMsUUFBYTtRQUU5QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbEM7YUFBTTtZQUNOLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDO1NBQ2hDOzs7Ozs7SUFJSyxnQkFBZ0IsQ0FBQyxFQUFPO1FBRTlCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDOzs7Ozs7SUFJYixpQkFBaUIsQ0FBQyxFQUFPO1FBRS9CLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDOzs7Ozs7SUFHZCxnQkFBZ0IsQ0FBQyxVQUFtQjtRQUUxQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUU3QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNqQixPQUFPO1NBQ1A7UUFFRCxJQUFJLFVBQVUsRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdEI7YUFBTTtZQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDckI7Ozs7O0lBSVEsUUFBUTtRQUVqQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNqQixPQUFPLFNBQVMsQ0FBQztTQUNqQjs7UUFFRCxNQUFNLFFBQVEsR0FBUSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRWhELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMzQixPQUFPLFNBQVMsQ0FBQztTQUNqQjtRQUVELE9BQU8sUUFBUSxDQUFDO0tBQ2hCOzs7OztJQUdTLE9BQU8sQ0FBQyxRQUFhO1FBRTlCLElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzVCLE9BQU8sS0FBSyxDQUFDO1NBQ2I7O1FBRUQsTUFBTSxRQUFRLEdBQWtCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTdELElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDeEIsT0FBTyxLQUFLLENBQUM7U0FDYjtRQUVELElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtZQUM3QixPQUFPLEtBQUssQ0FBQztTQUNiO1FBRUQsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDcEMsT0FBTyxLQUFLLENBQUM7U0FDYjtRQUVELE9BQU8sSUFBSSxDQUFDO0tBQ1o7OztZQTFJRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRSxFQUFFO2dCQUNaLFNBQVMsRUFBRTtvQkFDVjt3QkFDQyxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsY0FBYzt3QkFDM0IsS0FBSyxFQUFFLElBQUk7cUJBQ1g7aUJBQ0Q7YUFDRDs7OztZQWZrQixVQUFVOzs7b0JBb0IzQixLQUFLO3NCQUdMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBPbkRlc3Ryb3ksIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgKiBhcyBRdWlsbCBmcm9tICdxdWlsbCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnd2EtcXVpbGwnLFxuXHR0ZW1wbGF0ZTogJycsXG5cdHByb3ZpZGVyczogW1xuXHRcdHtcblx0XHRcdHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuXHRcdFx0dXNlRXhpc3Rpbmc6IFF1aWxsQ29tcG9uZW50LFxuXHRcdFx0bXVsdGk6IHRydWUsXG5cdFx0fSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgUXVpbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3JcbntcblxuXG5cdEBJbnB1dCgpXG5cdHB1YmxpYyB0aGVtZTogc3RyaW5nID0gJ3Nub3cnO1xuXG5cdEBJbnB1dCgpXG5cdHB1YmxpYyBvcHRpb25zOiBhbnkgPSBudWxsO1xuXG5cdHByb3RlY3RlZCBlZGl0b3I6IFF1aWxsLlF1aWxsO1xuXG5cdHByaXZhdGUgZGVmYXVsdENvbnRlbnRzOiBhbnl8dW5kZWZpbmVkO1xuXG5cdHByaXZhdGUgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSAkZWw6IEVsZW1lbnRSZWYsXG5cdCkge31cblxuXG5cdHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkXG5cdHtcblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zIHx8IHt9O1xuXG5cdFx0aWYgKHR5cGVvZiBvcHRpb25zLnRoZW1lID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0b3B0aW9ucy50aGVtZSA9IHRoaXMudGhlbWU7XG5cdFx0fVxuXG5cdFx0dGhpcy5lZGl0b3IgPSBuZXcgUXVpbGwodGhpcy4kZWwubmF0aXZlRWxlbWVudCwgb3B0aW9ucyk7XG5cblx0XHR0aGlzLnNldERpc2FibGVkU3RhdGUodGhpcy5pc0Rpc2FibGVkKTtcblxuXHRcdGlmICh0eXBlb2YgdGhpcy5kZWZhdWx0Q29udGVudHMgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHR0aGlzLmVkaXRvci5zZXRDb250ZW50cyh0aGlzLmRlZmF1bHRDb250ZW50cyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5lZGl0b3Iub24oJ3RleHQtY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5vbkNoYW5nZSh0aGlzLmdldFZhbHVlKCkpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy4kZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucWwtZWRpdG9yJykuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcblx0XHRcdHRoaXMub25Ub3VjaGVkKCk7XG5cdFx0fSk7XG5cdH1cblxuXG5cdHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkXG5cdHtcblx0fVxuXG5cblx0cHVibGljIHdyaXRlVmFsdWUoY29udGVudHM6IGFueSk6IHZvaWRcblx0e1xuXHRcdGlmICh0aGlzLmVkaXRvcikge1xuXHRcdFx0dGhpcy5lZGl0b3Iuc2V0Q29udGVudHMoY29udGVudHMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRlZmF1bHRDb250ZW50cyA9IGNvbnRlbnRzO1xuXHRcdH1cblx0fVxuXG5cblx0cHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWRcblx0e1xuXHRcdHRoaXMub25DaGFuZ2UgPSBmbjtcblx0fVxuXG5cblx0cHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkXG5cdHtcblx0XHR0aGlzLm9uVG91Y2hlZCA9IGZuO1xuXHR9XG5cblx0cHVibGljIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikgOiB2b2lkXG5cdHtcblx0XHR0aGlzLmlzRGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuXG5cdFx0aWYgKCF0aGlzLmVkaXRvcikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChpc0Rpc2FibGVkKSB7XG5cdFx0XHR0aGlzLmVkaXRvci5kaXNhYmxlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZWRpdG9yLmVuYWJsZSgpO1xuXHRcdH1cblx0fVxuXG5cblx0cHJvdGVjdGVkIGdldFZhbHVlKCk6IGFueXx1bmRlZmluZWRcblx0e1xuXHRcdGlmICghdGhpcy5lZGl0b3IpIHtcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY29udGVudHM6IGFueSA9IHRoaXMuZWRpdG9yLmdldENvbnRlbnRzKCk7XG5cblx0XHRpZiAodGhpcy5pc0VtcHR5KGNvbnRlbnRzKSkge1xuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29udGVudHM7XG5cdH1cblxuXG5cdHByb3RlY3RlZCBpc0VtcHR5KGNvbnRlbnRzOiBhbnkpOiBib29sZWFuXG5cdHtcblx0XHRpZiAoY29udGVudHMub3BzLmxlbmd0aCA+IDEpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBvcHNUeXBlczogQXJyYXk8c3RyaW5nPiA9IE9iamVjdC5rZXlzKGNvbnRlbnRzLm9wc1swXSk7XG5cblx0XHRpZiAob3BzVHlwZXMubGVuZ3RoID4gMSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmIChvcHNUeXBlc1swXSAhPT0gJ2luc2VydCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoY29udGVudHMub3BzWzBdLmluc2VydCAhPT0gJ1xcbicpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cblx0cHJvdGVjdGVkIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG5cblx0cHJpdmF0ZSBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuXG59XG4iXX0=