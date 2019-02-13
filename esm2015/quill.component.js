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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHdlYmFjYWQvbmctcXVpbGwvIiwic291cmNlcyI6WyJxdWlsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFxQixLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUF1QixpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZFLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBYy9CLE1BQU07Ozs7SUFlTCxZQUNTO1FBQUEsUUFBRyxHQUFILEdBQUc7cUJBWFcsTUFBTTt1QkFHUCxJQUFJO3lCQXVHSixHQUFHLEVBQUUsSUFBRzt3QkFHWCxDQUFDLENBQU0sRUFBRSxFQUFFLElBQUc7S0FqRzdCOzs7O0lBR0csUUFBUTs7UUFFZCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUVuQyxJQUFJLE9BQU8sT0FBTyxDQUFDLEtBQUssS0FBSyxXQUFXLEVBQUU7WUFDekMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQzNCO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV6RCxJQUFJLE9BQU8sSUFBSSxDQUFDLGVBQWUsS0FBSyxXQUFXLEVBQUU7WUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzlDO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRTtZQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQy9CLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQ2hGLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNqQixDQUFDLENBQUM7Ozs7O0lBSUcsV0FBVzs7Ozs7O0lBS1gsVUFBVSxDQUFDLFFBQWE7UUFFOUIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2xDO2FBQU07WUFDTixJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQztTQUNoQzs7Ozs7O0lBSUssZ0JBQWdCLENBQUMsRUFBTztRQUU5QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQzs7Ozs7O0lBSWIsaUJBQWlCLENBQUMsRUFBTztRQUUvQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQzs7Ozs7SUFJWCxRQUFRO1FBRWpCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2pCLE9BQU8sU0FBUyxDQUFDO1NBQ2pCOztRQUVELE1BQU0sUUFBUSxHQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFaEQsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzNCLE9BQU8sU0FBUyxDQUFDO1NBQ2pCO1FBRUQsT0FBTyxRQUFRLENBQUM7S0FDaEI7Ozs7O0lBR1MsT0FBTyxDQUFDLFFBQWE7UUFFOUIsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDNUIsT0FBTyxLQUFLLENBQUM7U0FDYjs7UUFFRCxNQUFNLFFBQVEsR0FBa0IsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFN0QsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN4QixPQUFPLEtBQUssQ0FBQztTQUNiO1FBRUQsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFFO1lBQzdCLE9BQU8sS0FBSyxDQUFDO1NBQ2I7UUFFRCxJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtZQUNwQyxPQUFPLEtBQUssQ0FBQztTQUNiO1FBRUQsT0FBTyxJQUFJLENBQUM7S0FDWjs7O1lBdkhELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osU0FBUyxFQUFFO29CQUNWO3dCQUNDLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxjQUFjO3dCQUMzQixLQUFLLEVBQUUsSUFBSTtxQkFDWDtpQkFDRDthQUNEOzs7O1lBZmtCLFVBQVU7OztvQkFvQjNCLEtBQUs7c0JBR0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIE9uRGVzdHJveSwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCAqIGFzIFF1aWxsIGZyb20gJ3F1aWxsJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICd3YS1xdWlsbCcsXG5cdHRlbXBsYXRlOiAnJyxcblx0cHJvdmlkZXJzOiBbXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG5cdFx0XHR1c2VFeGlzdGluZzogUXVpbGxDb21wb25lbnQsXG5cdFx0XHRtdWx0aTogdHJ1ZSxcblx0XHR9LFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBRdWlsbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3Nvclxue1xuXG5cblx0QElucHV0KClcblx0cHVibGljIHRoZW1lOiBzdHJpbmcgPSAnc25vdyc7XG5cblx0QElucHV0KClcblx0cHVibGljIG9wdGlvbnM6IGFueSA9IG51bGw7XG5cblx0cHJvdGVjdGVkIGVkaXRvcjogUXVpbGw7XG5cblx0cHJpdmF0ZSBkZWZhdWx0Q29udGVudHM6IGFueXx1bmRlZmluZWQ7XG5cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlICRlbDogRWxlbWVudFJlZixcblx0KSB7fVxuXG5cblx0cHVibGljIG5nT25Jbml0KCk6IHZvaWRcblx0e1xuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgfHwge307XG5cblx0XHRpZiAodHlwZW9mIG9wdGlvbnMudGhlbWUgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRvcHRpb25zLnRoZW1lID0gdGhpcy50aGVtZTtcblx0XHR9XG5cblx0XHR0aGlzLmVkaXRvciA9IG5ldyBRdWlsbCh0aGlzLiRlbC5uYXRpdmVFbGVtZW50LCBvcHRpb25zKTtcblxuXHRcdGlmICh0eXBlb2YgdGhpcy5kZWZhdWx0Q29udGVudHMgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHR0aGlzLmVkaXRvci5zZXRDb250ZW50cyh0aGlzLmRlZmF1bHRDb250ZW50cyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5lZGl0b3Iub24oJ3RleHQtY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5vbkNoYW5nZSh0aGlzLmdldFZhbHVlKCkpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy4kZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucWwtZWRpdG9yJykuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcblx0XHRcdHRoaXMub25Ub3VjaGVkKCk7XG5cdFx0fSk7XG5cdH1cblxuXG5cdHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkXG5cdHtcblx0fVxuXG5cblx0cHVibGljIHdyaXRlVmFsdWUoY29udGVudHM6IGFueSk6IHZvaWRcblx0e1xuXHRcdGlmICh0aGlzLmVkaXRvcikge1xuXHRcdFx0dGhpcy5lZGl0b3Iuc2V0Q29udGVudHMoY29udGVudHMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRlZmF1bHRDb250ZW50cyA9IGNvbnRlbnRzO1xuXHRcdH1cblx0fVxuXG5cblx0cHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWRcblx0e1xuXHRcdHRoaXMub25DaGFuZ2UgPSBmbjtcblx0fVxuXG5cblx0cHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkXG5cdHtcblx0XHR0aGlzLm9uVG91Y2hlZCA9IGZuO1xuXHR9XG5cblxuXHRwcm90ZWN0ZWQgZ2V0VmFsdWUoKTogYW55fHVuZGVmaW5lZFxuXHR7XG5cdFx0aWYgKCF0aGlzLmVkaXRvcikge1xuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHRjb25zdCBjb250ZW50czogYW55ID0gdGhpcy5lZGl0b3IuZ2V0Q29udGVudHMoKTtcblxuXHRcdGlmICh0aGlzLmlzRW1wdHkoY29udGVudHMpKSB7XG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb250ZW50cztcblx0fVxuXG5cblx0cHJvdGVjdGVkIGlzRW1wdHkoY29udGVudHM6IGFueSk6IGJvb2xlYW5cblx0e1xuXHRcdGlmIChjb250ZW50cy5vcHMubGVuZ3RoID4gMSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9wc1R5cGVzOiBBcnJheTxzdHJpbmc+ID0gT2JqZWN0LmtleXMoY29udGVudHMub3BzWzBdKTtcblxuXHRcdGlmIChvcHNUeXBlcy5sZW5ndGggPiAxKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKG9wc1R5cGVzWzBdICE9PSAnaW5zZXJ0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmIChjb250ZW50cy5vcHNbMF0uaW5zZXJ0ICE9PSAnXFxuJykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblxuXHRwcm90ZWN0ZWQgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cblxuXHRwcml2YXRlIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG5cbn1cbiJdfQ==