import { Component, ElementRef, Input, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as Quill from 'quill';

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViYWNhZC1uZy1xdWlsbC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHdlYmFjYWQvbmctcXVpbGwvcXVpbGwuY29tcG9uZW50LnRzIiwibmc6Ly9Ad2ViYWNhZC9uZy1xdWlsbC9xdWlsbC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgT25EZXN0cm95LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0ICogYXMgUXVpbGwgZnJvbSAncXVpbGwnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3dhLXF1aWxsJyxcblx0dGVtcGxhdGU6ICcnLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcblx0XHRcdHVzZUV4aXN0aW5nOiBRdWlsbENvbXBvbmVudCxcblx0XHRcdG11bHRpOiB0cnVlLFxuXHRcdH0sXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIFF1aWxsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yXG57XG5cblxuXHRASW5wdXQoKVxuXHRwdWJsaWMgdGhlbWU6IHN0cmluZyA9ICdzbm93JztcblxuXHRASW5wdXQoKVxuXHRwdWJsaWMgb3B0aW9uczogYW55ID0gbnVsbDtcblxuXHRwcm90ZWN0ZWQgZWRpdG9yOiBRdWlsbDtcblxuXHRwcml2YXRlIGRlZmF1bHRDb250ZW50czogYW55fHVuZGVmaW5lZDtcblxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgJGVsOiBFbGVtZW50UmVmLFxuXHQpIHt9XG5cblxuXHRwdWJsaWMgbmdPbkluaXQoKTogdm9pZFxuXHR7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyB8fCB7fTtcblxuXHRcdGlmICh0eXBlb2Ygb3B0aW9ucy50aGVtZSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdG9wdGlvbnMudGhlbWUgPSB0aGlzLnRoZW1lO1xuXHRcdH1cblxuXHRcdHRoaXMuZWRpdG9yID0gbmV3IFF1aWxsKHRoaXMuJGVsLm5hdGl2ZUVsZW1lbnQsIG9wdGlvbnMpO1xuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLmRlZmF1bHRDb250ZW50cyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHRoaXMuZWRpdG9yLnNldENvbnRlbnRzKHRoaXMuZGVmYXVsdENvbnRlbnRzKTtcblx0XHR9XG5cblx0XHR0aGlzLmVkaXRvci5vbigndGV4dC1jaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLm9uQ2hhbmdlKHRoaXMuZ2V0VmFsdWUoKSk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLiRlbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xbC1lZGl0b3InKS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5vblRvdWNoZWQoKTtcblx0XHR9KTtcblx0fVxuXG5cblx0cHVibGljIG5nT25EZXN0cm95KCk6IHZvaWRcblx0e1xuXHR9XG5cblxuXHRwdWJsaWMgd3JpdGVWYWx1ZShjb250ZW50czogYW55KTogdm9pZFxuXHR7XG5cdFx0aWYgKHRoaXMuZWRpdG9yKSB7XG5cdFx0XHR0aGlzLmVkaXRvci5zZXRDb250ZW50cyhjb250ZW50cyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZGVmYXVsdENvbnRlbnRzID0gY29udGVudHM7XG5cdFx0fVxuXHR9XG5cblxuXHRwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZFxuXHR7XG5cdFx0dGhpcy5vbkNoYW5nZSA9IGZuO1xuXHR9XG5cblxuXHRwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWRcblx0e1xuXHRcdHRoaXMub25Ub3VjaGVkID0gZm47XG5cdH1cblxuXG5cdHByb3RlY3RlZCBnZXRWYWx1ZSgpOiBhbnl8dW5kZWZpbmVkXG5cdHtcblx0XHRpZiAoIXRoaXMuZWRpdG9yKSB7XG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNvbnRlbnRzOiBhbnkgPSB0aGlzLmVkaXRvci5nZXRDb250ZW50cygpO1xuXG5cdFx0aWYgKHRoaXMuaXNFbXB0eShjb250ZW50cykpIHtcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbnRlbnRzO1xuXHR9XG5cblxuXHRwcm90ZWN0ZWQgaXNFbXB0eShjb250ZW50czogYW55KTogYm9vbGVhblxuXHR7XG5cdFx0aWYgKGNvbnRlbnRzLm9wcy5sZW5ndGggPiAxKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb3BzVHlwZXM6IEFycmF5PHN0cmluZz4gPSBPYmplY3Qua2V5cyhjb250ZW50cy5vcHNbMF0pO1xuXG5cdFx0aWYgKG9wc1R5cGVzLmxlbmd0aCA+IDEpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAob3BzVHlwZXNbMF0gIT09ICdpbnNlcnQnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbnRlbnRzLm9wc1swXS5pbnNlcnQgIT09ICdcXG4nKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXG5cdHByb3RlY3RlZCBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuXG5cdHByaXZhdGUgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcblxufVxuIiwiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7UXVpbGxDb21wb25lbnR9IGZyb20gJy4vcXVpbGwuY29tcG9uZW50JztcblxuXG5ATmdNb2R1bGUoe1xuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRRdWlsbENvbXBvbmVudCxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdFF1aWxsQ29tcG9uZW50LFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBRdWlsbE1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7SUErQkMsWUFDUztRQUFBLFFBQUcsR0FBSCxHQUFHO3FCQVhXLE1BQU07dUJBR1AsSUFBSTt5QkF1R0osU0FBUTt3QkFHWCxDQUFDLENBQU0sUUFBTztLQWpHN0I7Ozs7SUFHRyxRQUFROztRQUVkLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1FBRW5DLElBQUksT0FBTyxPQUFPLENBQUMsS0FBSyxLQUFLLFdBQVcsRUFBRTtZQUN6QyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDM0I7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXpELElBQUksT0FBTyxJQUFJLENBQUMsZUFBZSxLQUFLLFdBQVcsRUFBRTtZQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDOUM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUMvQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO1lBQzNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNqQixDQUFDLENBQUM7Ozs7O0lBSUcsV0FBVzs7Ozs7O0lBS1gsVUFBVSxDQUFDLFFBQWE7UUFFOUIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2xDO2FBQU07WUFDTixJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQztTQUNoQzs7Ozs7O0lBSUssZ0JBQWdCLENBQUMsRUFBTztRQUU5QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQzs7Ozs7O0lBSWIsaUJBQWlCLENBQUMsRUFBTztRQUUvQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQzs7Ozs7SUFJWCxRQUFRO1FBRWpCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2pCLE9BQU8sU0FBUyxDQUFDO1NBQ2pCOztRQUVELE1BQU0sUUFBUSxHQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFaEQsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzNCLE9BQU8sU0FBUyxDQUFDO1NBQ2pCO1FBRUQsT0FBTyxRQUFRLENBQUM7S0FDaEI7Ozs7O0lBR1MsT0FBTyxDQUFDLFFBQWE7UUFFOUIsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDNUIsT0FBTyxLQUFLLENBQUM7U0FDYjs7UUFFRCxNQUFNLFFBQVEsR0FBa0IsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFN0QsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN4QixPQUFPLEtBQUssQ0FBQztTQUNiO1FBRUQsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFFO1lBQzdCLE9BQU8sS0FBSyxDQUFDO1NBQ2I7UUFFRCxJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtZQUNwQyxPQUFPLEtBQUssQ0FBQztTQUNiO1FBRUQsT0FBTyxJQUFJLENBQUM7S0FDWjs7O1lBdkhELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osU0FBUyxFQUFFO29CQUNWO3dCQUNDLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxjQUFjO3dCQUMzQixLQUFLLEVBQUUsSUFBSTtxQkFDWDtpQkFDRDthQUNEOzs7O1lBZmtCLFVBQVU7OztvQkFvQjNCLEtBQUs7c0JBR0wsS0FBSzs7Ozs7OztBQ3ZCUDs7O1lBS0MsUUFBUSxTQUFDO2dCQUNULFlBQVksRUFBRTtvQkFDYixjQUFjO2lCQUNkO2dCQUNELE9BQU8sRUFBRTtvQkFDUixjQUFjO2lCQUNkO2FBQ0Q7Ozs7Ozs7Ozs7Ozs7OzsifQ==