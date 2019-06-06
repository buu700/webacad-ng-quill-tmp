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
     * @param {?} isDisabled
     * @return {?}
     */
    QuillComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
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
    QuillComponent.prototype.onTouched;
    /** @type {?} */
    QuillComponent.prototype.onChange;
    /** @type {?} */
    QuillComponent.prototype.$el;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHdlYmFjYWQvbmctcXVpbGwvIiwic291cmNlcyI6WyJxdWlsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFxQixLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUF1QixpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZFLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDOztJQTZCOUIsd0JBQ1M7UUFBQSxRQUFHLEdBQUgsR0FBRztxQkFYVyxNQUFNO3VCQUdQLElBQUk7eUJBZ0hKLGVBQVE7d0JBR1gsVUFBQyxDQUFNLEtBQU87S0ExRzdCOzs7O0lBR0csaUNBQVE7Ozs7OztRQUVkLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1FBRW5DLElBQUksT0FBTyxPQUFPLENBQUMsS0FBSyxLQUFLLFdBQVcsRUFBRTtZQUN6QyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDM0I7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXpELElBQUksT0FBTyxJQUFJLENBQUMsZUFBZSxLQUFLLFdBQVcsRUFBRTtZQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDOUM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUU7WUFDN0IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUMvQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO1lBQzNFLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNqQixDQUFDLENBQUM7Ozs7O0lBSUcsb0NBQVc7Ozs7Ozs7OztJQUtYLG1DQUFVOzs7O2NBQUMsUUFBYTtRQUU5QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbEM7YUFBTTtZQUNOLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDO1NBQ2hDOzs7Ozs7SUFJSyx5Q0FBZ0I7Ozs7Y0FBQyxFQUFPO1FBRTlCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDOzs7Ozs7SUFJYiwwQ0FBaUI7Ozs7Y0FBQyxFQUFPO1FBRS9CLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDOzs7Ozs7SUFHZCx5Q0FBZ0I7Ozs7Y0FBQyxVQUFtQjtRQUUxQyxJQUFJLFVBQVUsRUFBRTtZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdEI7YUFBTTtZQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDckI7Ozs7O0lBSVEsaUNBQVE7OztJQUFsQjtRQUVDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2pCLE9BQU8sU0FBUyxDQUFDO1NBQ2pCOztRQUVELElBQU0sUUFBUSxHQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFaEQsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzNCLE9BQU8sU0FBUyxDQUFDO1NBQ2pCO1FBRUQsT0FBTyxRQUFRLENBQUM7S0FDaEI7Ozs7O0lBR1MsZ0NBQU87Ozs7SUFBakIsVUFBa0IsUUFBYTtRQUU5QixJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM1QixPQUFPLEtBQUssQ0FBQztTQUNiOztRQUVELElBQU0sUUFBUSxHQUFrQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU3RCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sS0FBSyxDQUFDO1NBQ2I7UUFFRCxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDN0IsT0FBTyxLQUFLLENBQUM7U0FDYjtRQUVELElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ3BDLE9BQU8sS0FBSyxDQUFDO1NBQ2I7UUFFRCxPQUFPLElBQUksQ0FBQztLQUNaOztnQkFoSUQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUUsRUFBRTtvQkFDWixTQUFTLEVBQUU7d0JBQ1Y7NEJBQ0MsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLGNBQWM7NEJBQzNCLEtBQUssRUFBRSxJQUFJO3lCQUNYO3FCQUNEO2lCQUNEOzs7O2dCQWZrQixVQUFVOzs7d0JBb0IzQixLQUFLOzBCQUdMLEtBQUs7O3lCQXZCUDs7U0FnQmEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIE9uRGVzdHJveSwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCAqIGFzIFF1aWxsIGZyb20gJ3F1aWxsJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICd3YS1xdWlsbCcsXG5cdHRlbXBsYXRlOiAnJyxcblx0cHJvdmlkZXJzOiBbXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG5cdFx0XHR1c2VFeGlzdGluZzogUXVpbGxDb21wb25lbnQsXG5cdFx0XHRtdWx0aTogdHJ1ZSxcblx0XHR9LFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBRdWlsbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3Nvclxue1xuXG5cblx0QElucHV0KClcblx0cHVibGljIHRoZW1lOiBzdHJpbmcgPSAnc25vdyc7XG5cblx0QElucHV0KClcblx0cHVibGljIG9wdGlvbnM6IGFueSA9IG51bGw7XG5cblx0cHJvdGVjdGVkIGVkaXRvcjogUXVpbGwuUXVpbGw7XG5cblx0cHJpdmF0ZSBkZWZhdWx0Q29udGVudHM6IGFueXx1bmRlZmluZWQ7XG5cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlICRlbDogRWxlbWVudFJlZixcblx0KSB7fVxuXG5cblx0cHVibGljIG5nT25Jbml0KCk6IHZvaWRcblx0e1xuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgfHwge307XG5cblx0XHRpZiAodHlwZW9mIG9wdGlvbnMudGhlbWUgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRvcHRpb25zLnRoZW1lID0gdGhpcy50aGVtZTtcblx0XHR9XG5cblx0XHR0aGlzLmVkaXRvciA9IG5ldyBRdWlsbCh0aGlzLiRlbC5uYXRpdmVFbGVtZW50LCBvcHRpb25zKTtcblxuXHRcdGlmICh0eXBlb2YgdGhpcy5kZWZhdWx0Q29udGVudHMgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHR0aGlzLmVkaXRvci5zZXRDb250ZW50cyh0aGlzLmRlZmF1bHRDb250ZW50cyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5lZGl0b3Iub24oJ3RleHQtY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5vbkNoYW5nZSh0aGlzLmdldFZhbHVlKCkpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy4kZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucWwtZWRpdG9yJykuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcblx0XHRcdHRoaXMub25Ub3VjaGVkKCk7XG5cdFx0fSk7XG5cdH1cblxuXG5cdHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkXG5cdHtcblx0fVxuXG5cblx0cHVibGljIHdyaXRlVmFsdWUoY29udGVudHM6IGFueSk6IHZvaWRcblx0e1xuXHRcdGlmICh0aGlzLmVkaXRvcikge1xuXHRcdFx0dGhpcy5lZGl0b3Iuc2V0Q29udGVudHMoY29udGVudHMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRlZmF1bHRDb250ZW50cyA9IGNvbnRlbnRzO1xuXHRcdH1cblx0fVxuXG5cblx0cHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWRcblx0e1xuXHRcdHRoaXMub25DaGFuZ2UgPSBmbjtcblx0fVxuXG5cblx0cHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkXG5cdHtcblx0XHR0aGlzLm9uVG91Y2hlZCA9IGZuO1xuXHR9XG5cblx0cHVibGljIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikgOiB2b2lkXG5cdHtcblx0XHRpZiAoaXNEaXNhYmxlZCkge1xuXHRcdFx0dGhpcy5lZGl0b3IuZGlzYWJsZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmVkaXRvci5lbmFibGUoKTtcblx0XHR9XG5cdH1cblxuXG5cdHByb3RlY3RlZCBnZXRWYWx1ZSgpOiBhbnl8dW5kZWZpbmVkXG5cdHtcblx0XHRpZiAoIXRoaXMuZWRpdG9yKSB7XG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNvbnRlbnRzOiBhbnkgPSB0aGlzLmVkaXRvci5nZXRDb250ZW50cygpO1xuXG5cdFx0aWYgKHRoaXMuaXNFbXB0eShjb250ZW50cykpIHtcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbnRlbnRzO1xuXHR9XG5cblxuXHRwcm90ZWN0ZWQgaXNFbXB0eShjb250ZW50czogYW55KTogYm9vbGVhblxuXHR7XG5cdFx0aWYgKGNvbnRlbnRzLm9wcy5sZW5ndGggPiAxKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb3BzVHlwZXM6IEFycmF5PHN0cmluZz4gPSBPYmplY3Qua2V5cyhjb250ZW50cy5vcHNbMF0pO1xuXG5cdFx0aWYgKG9wc1R5cGVzLmxlbmd0aCA+IDEpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAob3BzVHlwZXNbMF0gIT09ICdpbnNlcnQnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbnRlbnRzLm9wc1swXS5pbnNlcnQgIT09ICdcXG4nKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXG5cdHByb3RlY3RlZCBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuXG5cdHByaXZhdGUgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcblxufVxuIl19