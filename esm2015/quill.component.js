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
    QuillComponent.prototype.onTouched;
    /** @type {?} */
    QuillComponent.prototype.onChange;
    /** @type {?} */
    QuillComponent.prototype.$el;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHdlYmFjYWQvbmctcXVpbGwvIiwic291cmNlcyI6WyJxdWlsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFxQixLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUF1QixpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZFLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBYy9CLE1BQU07Ozs7SUFlTCxZQUNTO1FBQUEsUUFBRyxHQUFILEdBQUc7cUJBWFcsTUFBTTt1QkFHUCxJQUFJO3lCQWdISixHQUFHLEVBQUUsSUFBRzt3QkFHWCxDQUFDLENBQU0sRUFBRSxFQUFFLElBQUc7S0ExRzdCOzs7O0lBR0csUUFBUTs7UUFFZCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUVuQyxJQUFJLE9BQU8sT0FBTyxDQUFDLEtBQUssS0FBSyxXQUFXLEVBQUU7WUFDekMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQzNCO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV6RCxJQUFJLE9BQU8sSUFBSSxDQUFDLGVBQWUsS0FBSyxXQUFXLEVBQUU7WUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzlDO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRTtZQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQy9CLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQ2hGLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNqQixDQUFDLENBQUM7Ozs7O0lBSUcsV0FBVzs7Ozs7O0lBS1gsVUFBVSxDQUFDLFFBQWE7UUFFOUIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2xDO2FBQU07WUFDTixJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQztTQUNoQzs7Ozs7O0lBSUssZ0JBQWdCLENBQUMsRUFBTztRQUU5QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQzs7Ozs7O0lBSWIsaUJBQWlCLENBQUMsRUFBTztRQUUvQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQzs7Ozs7O0lBR2QsZ0JBQWdCLENBQUMsVUFBbUI7UUFFMUMsSUFBSSxVQUFVLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3RCO2FBQU07WUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3JCOzs7OztJQUlRLFFBQVE7UUFFakIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDakIsT0FBTyxTQUFTLENBQUM7U0FDakI7O1FBRUQsTUFBTSxRQUFRLEdBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVoRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDM0IsT0FBTyxTQUFTLENBQUM7U0FDakI7UUFFRCxPQUFPLFFBQVEsQ0FBQztLQUNoQjs7Ozs7SUFHUyxPQUFPLENBQUMsUUFBYTtRQUU5QixJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM1QixPQUFPLEtBQUssQ0FBQztTQUNiOztRQUVELE1BQU0sUUFBUSxHQUFrQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU3RCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sS0FBSyxDQUFDO1NBQ2I7UUFFRCxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDN0IsT0FBTyxLQUFLLENBQUM7U0FDYjtRQUVELElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ3BDLE9BQU8sS0FBSyxDQUFDO1NBQ2I7UUFFRCxPQUFPLElBQUksQ0FBQztLQUNaOzs7WUFoSUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUUsRUFBRTtnQkFDWixTQUFTLEVBQUU7b0JBQ1Y7d0JBQ0MsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLGNBQWM7d0JBQzNCLEtBQUssRUFBRSxJQUFJO3FCQUNYO2lCQUNEO2FBQ0Q7Ozs7WUFma0IsVUFBVTs7O29CQW9CM0IsS0FBSztzQkFHTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgT25EZXN0cm95LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0ICogYXMgUXVpbGwgZnJvbSAncXVpbGwnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3dhLXF1aWxsJyxcblx0dGVtcGxhdGU6ICcnLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcblx0XHRcdHVzZUV4aXN0aW5nOiBRdWlsbENvbXBvbmVudCxcblx0XHRcdG11bHRpOiB0cnVlLFxuXHRcdH0sXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIFF1aWxsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yXG57XG5cblxuXHRASW5wdXQoKVxuXHRwdWJsaWMgdGhlbWU6IHN0cmluZyA9ICdzbm93JztcblxuXHRASW5wdXQoKVxuXHRwdWJsaWMgb3B0aW9uczogYW55ID0gbnVsbDtcblxuXHRwcm90ZWN0ZWQgZWRpdG9yOiBRdWlsbC5RdWlsbDtcblxuXHRwcml2YXRlIGRlZmF1bHRDb250ZW50czogYW55fHVuZGVmaW5lZDtcblxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgJGVsOiBFbGVtZW50UmVmLFxuXHQpIHt9XG5cblxuXHRwdWJsaWMgbmdPbkluaXQoKTogdm9pZFxuXHR7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyB8fCB7fTtcblxuXHRcdGlmICh0eXBlb2Ygb3B0aW9ucy50aGVtZSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdG9wdGlvbnMudGhlbWUgPSB0aGlzLnRoZW1lO1xuXHRcdH1cblxuXHRcdHRoaXMuZWRpdG9yID0gbmV3IFF1aWxsKHRoaXMuJGVsLm5hdGl2ZUVsZW1lbnQsIG9wdGlvbnMpO1xuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLmRlZmF1bHRDb250ZW50cyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHRoaXMuZWRpdG9yLnNldENvbnRlbnRzKHRoaXMuZGVmYXVsdENvbnRlbnRzKTtcblx0XHR9XG5cblx0XHR0aGlzLmVkaXRvci5vbigndGV4dC1jaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLm9uQ2hhbmdlKHRoaXMuZ2V0VmFsdWUoKSk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLiRlbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xbC1lZGl0b3InKS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5vblRvdWNoZWQoKTtcblx0XHR9KTtcblx0fVxuXG5cblx0cHVibGljIG5nT25EZXN0cm95KCk6IHZvaWRcblx0e1xuXHR9XG5cblxuXHRwdWJsaWMgd3JpdGVWYWx1ZShjb250ZW50czogYW55KTogdm9pZFxuXHR7XG5cdFx0aWYgKHRoaXMuZWRpdG9yKSB7XG5cdFx0XHR0aGlzLmVkaXRvci5zZXRDb250ZW50cyhjb250ZW50cyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZGVmYXVsdENvbnRlbnRzID0gY29udGVudHM7XG5cdFx0fVxuXHR9XG5cblxuXHRwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZFxuXHR7XG5cdFx0dGhpcy5vbkNoYW5nZSA9IGZuO1xuXHR9XG5cblxuXHRwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWRcblx0e1xuXHRcdHRoaXMub25Ub3VjaGVkID0gZm47XG5cdH1cblxuXHRwdWJsaWMgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSA6IHZvaWRcblx0e1xuXHRcdGlmIChpc0Rpc2FibGVkKSB7XG5cdFx0XHR0aGlzLmVkaXRvci5kaXNhYmxlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZWRpdG9yLmVuYWJsZSgpO1xuXHRcdH1cblx0fVxuXG5cblx0cHJvdGVjdGVkIGdldFZhbHVlKCk6IGFueXx1bmRlZmluZWRcblx0e1xuXHRcdGlmICghdGhpcy5lZGl0b3IpIHtcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY29udGVudHM6IGFueSA9IHRoaXMuZWRpdG9yLmdldENvbnRlbnRzKCk7XG5cblx0XHRpZiAodGhpcy5pc0VtcHR5KGNvbnRlbnRzKSkge1xuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29udGVudHM7XG5cdH1cblxuXG5cdHByb3RlY3RlZCBpc0VtcHR5KGNvbnRlbnRzOiBhbnkpOiBib29sZWFuXG5cdHtcblx0XHRpZiAoY29udGVudHMub3BzLmxlbmd0aCA+IDEpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRjb25zdCBvcHNUeXBlczogQXJyYXk8c3RyaW5nPiA9IE9iamVjdC5rZXlzKGNvbnRlbnRzLm9wc1swXSk7XG5cblx0XHRpZiAob3BzVHlwZXMubGVuZ3RoID4gMSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmIChvcHNUeXBlc1swXSAhPT0gJ2luc2VydCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoY29udGVudHMub3BzWzBdLmluc2VydCAhPT0gJ1xcbicpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cblx0cHJvdGVjdGVkIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG5cblx0cHJpdmF0ZSBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuXG59XG4iXX0=