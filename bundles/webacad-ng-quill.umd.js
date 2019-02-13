(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('quill')) :
    typeof define === 'function' && define.amd ? define('@webacad/ng-quill', ['exports', '@angular/core', '@angular/forms', 'quill'], factory) :
    (factory((global.webacad = global.webacad || {}, global.webacad['ng-quill'] = {}),global.ng.core,global.ng.forms,global.Quill));
}(this, (function (exports,core,forms,Quill) { 'use strict';

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
            { type: core.Component, args: [{
                        selector: 'wa-quill',
                        template: '',
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: QuillComponent,
                                multi: true,
                            },
                        ]
                    }] }
        ];
        /** @nocollapse */
        QuillComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        QuillComponent.propDecorators = {
            theme: [{ type: core.Input }],
            options: [{ type: core.Input }]
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
            { type: core.NgModule, args: [{
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

    exports.QuillComponent = QuillComponent;
    exports.QuillModule = QuillModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViYWNhZC1uZy1xdWlsbC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0B3ZWJhY2FkL25nLXF1aWxsL3F1aWxsLmNvbXBvbmVudC50cyIsIm5nOi8vQHdlYmFjYWQvbmctcXVpbGwvcXVpbGwubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIE9uRGVzdHJveSwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCAqIGFzIFF1aWxsIGZyb20gJ3F1aWxsJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICd3YS1xdWlsbCcsXG5cdHRlbXBsYXRlOiAnJyxcblx0cHJvdmlkZXJzOiBbXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG5cdFx0XHR1c2VFeGlzdGluZzogUXVpbGxDb21wb25lbnQsXG5cdFx0XHRtdWx0aTogdHJ1ZSxcblx0XHR9LFxuXHRdLFxufSlcbmV4cG9ydCBjbGFzcyBRdWlsbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3Nvclxue1xuXG5cblx0QElucHV0KClcblx0cHVibGljIHRoZW1lOiBzdHJpbmcgPSAnc25vdyc7XG5cblx0QElucHV0KClcblx0cHVibGljIG9wdGlvbnM6IGFueSA9IG51bGw7XG5cblx0cHJvdGVjdGVkIGVkaXRvcjogUXVpbGw7XG5cblx0cHJpdmF0ZSBkZWZhdWx0Q29udGVudHM6IGFueXx1bmRlZmluZWQ7XG5cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlICRlbDogRWxlbWVudFJlZixcblx0KSB7fVxuXG5cblx0cHVibGljIG5nT25Jbml0KCk6IHZvaWRcblx0e1xuXHRcdGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgfHwge307XG5cblx0XHRpZiAodHlwZW9mIG9wdGlvbnMudGhlbWUgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRvcHRpb25zLnRoZW1lID0gdGhpcy50aGVtZTtcblx0XHR9XG5cblx0XHR0aGlzLmVkaXRvciA9IG5ldyBRdWlsbCh0aGlzLiRlbC5uYXRpdmVFbGVtZW50LCBvcHRpb25zKTtcblxuXHRcdGlmICh0eXBlb2YgdGhpcy5kZWZhdWx0Q29udGVudHMgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHR0aGlzLmVkaXRvci5zZXRDb250ZW50cyh0aGlzLmRlZmF1bHRDb250ZW50cyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5lZGl0b3Iub24oJ3RleHQtY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5vbkNoYW5nZSh0aGlzLmdldFZhbHVlKCkpO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy4kZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucWwtZWRpdG9yJykuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcblx0XHRcdHRoaXMub25Ub3VjaGVkKCk7XG5cdFx0fSk7XG5cdH1cblxuXG5cdHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkXG5cdHtcblx0fVxuXG5cblx0cHVibGljIHdyaXRlVmFsdWUoY29udGVudHM6IGFueSk6IHZvaWRcblx0e1xuXHRcdGlmICh0aGlzLmVkaXRvcikge1xuXHRcdFx0dGhpcy5lZGl0b3Iuc2V0Q29udGVudHMoY29udGVudHMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRlZmF1bHRDb250ZW50cyA9IGNvbnRlbnRzO1xuXHRcdH1cblx0fVxuXG5cblx0cHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWRcblx0e1xuXHRcdHRoaXMub25DaGFuZ2UgPSBmbjtcblx0fVxuXG5cblx0cHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkXG5cdHtcblx0XHR0aGlzLm9uVG91Y2hlZCA9IGZuO1xuXHR9XG5cblxuXHRwcm90ZWN0ZWQgZ2V0VmFsdWUoKTogYW55fHVuZGVmaW5lZFxuXHR7XG5cdFx0aWYgKCF0aGlzLmVkaXRvcikge1xuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHRjb25zdCBjb250ZW50czogYW55ID0gdGhpcy5lZGl0b3IuZ2V0Q29udGVudHMoKTtcblxuXHRcdGlmICh0aGlzLmlzRW1wdHkoY29udGVudHMpKSB7XG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb250ZW50cztcblx0fVxuXG5cblx0cHJvdGVjdGVkIGlzRW1wdHkoY29udGVudHM6IGFueSk6IGJvb2xlYW5cblx0e1xuXHRcdGlmIChjb250ZW50cy5vcHMubGVuZ3RoID4gMSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9wc1R5cGVzOiBBcnJheTxzdHJpbmc+ID0gT2JqZWN0LmtleXMoY29udGVudHMub3BzWzBdKTtcblxuXHRcdGlmIChvcHNUeXBlcy5sZW5ndGggPiAxKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKG9wc1R5cGVzWzBdICE9PSAnaW5zZXJ0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmIChjb250ZW50cy5vcHNbMF0uaW5zZXJ0ICE9PSAnXFxuJykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblxuXHRwcm90ZWN0ZWQgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cblxuXHRwcml2YXRlIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG5cbn1cbiIsImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1F1aWxsQ29tcG9uZW50fSBmcm9tICcuL3F1aWxsLmNvbXBvbmVudCc7XG5cblxuQE5nTW9kdWxlKHtcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0UXVpbGxDb21wb25lbnQsXG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRRdWlsbENvbXBvbmVudCxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgUXVpbGxNb2R1bGUge31cbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJOR19WQUxVRV9BQ0NFU1NPUiIsIkVsZW1lbnRSZWYiLCJJbnB1dCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUErQkMsd0JBQ1M7WUFBQSxRQUFHLEdBQUgsR0FBRzt5QkFYVyxNQUFNOzJCQUdQLElBQUk7NkJBdUdKLGVBQVE7NEJBR1gsVUFBQyxDQUFNLEtBQU87U0FqRzdCOzs7O1FBR0csaUNBQVE7Ozs7OztnQkFFZCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztnQkFFbkMsSUFBSSxPQUFPLE9BQU8sQ0FBQyxLQUFLLEtBQUssV0FBVyxFQUFFO29CQUN6QyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7aUJBQzNCO2dCQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBRXpELElBQUksT0FBTyxJQUFJLENBQUMsZUFBZSxLQUFLLFdBQVcsRUFBRTtvQkFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2lCQUM5QztnQkFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUU7b0JBQzdCLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7aUJBQy9CLENBQUMsQ0FBQztnQkFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO29CQUMzRSxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7aUJBQ2pCLENBQUMsQ0FBQzs7Ozs7UUFJRyxvQ0FBVzs7Ozs7Ozs7O1FBS1gsbUNBQVU7Ozs7c0JBQUMsUUFBYTtnQkFFOUIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDbEM7cUJBQU07b0JBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUM7aUJBQ2hDOzs7Ozs7UUFJSyx5Q0FBZ0I7Ozs7c0JBQUMsRUFBTztnQkFFOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7Ozs7OztRQUliLDBDQUFpQjs7OztzQkFBQyxFQUFPO2dCQUUvQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQzs7Ozs7UUFJWCxpQ0FBUTs7O1lBQWxCO2dCQUVDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNqQixPQUFPLFNBQVMsQ0FBQztpQkFDakI7O2dCQUVELElBQU0sUUFBUSxHQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBRWhELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDM0IsT0FBTyxTQUFTLENBQUM7aUJBQ2pCO2dCQUVELE9BQU8sUUFBUSxDQUFDO2FBQ2hCOzs7OztRQUdTLGdDQUFPOzs7O1lBQWpCLFVBQWtCLFFBQWE7Z0JBRTlCLElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUM1QixPQUFPLEtBQUssQ0FBQztpQkFDYjs7Z0JBRUQsSUFBTSxRQUFRLEdBQWtCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUU3RCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUN4QixPQUFPLEtBQUssQ0FBQztpQkFDYjtnQkFFRCxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUU7b0JBQzdCLE9BQU8sS0FBSyxDQUFDO2lCQUNiO2dCQUVELElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO29CQUNwQyxPQUFPLEtBQUssQ0FBQztpQkFDYjtnQkFFRCxPQUFPLElBQUksQ0FBQzthQUNaOztvQkF2SERBLGNBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsVUFBVTt3QkFDcEIsUUFBUSxFQUFFLEVBQUU7d0JBQ1osU0FBUyxFQUFFOzRCQUNWO2dDQUNDLE9BQU8sRUFBRUMsdUJBQWlCO2dDQUMxQixXQUFXLEVBQUUsY0FBYztnQ0FDM0IsS0FBSyxFQUFFLElBQUk7NkJBQ1g7eUJBQ0Q7cUJBQ0Q7Ozs7O3dCQWZrQkMsZUFBVTs7Ozs0QkFvQjNCQyxVQUFLOzhCQUdMQSxVQUFLOzs2QkF2QlA7Ozs7Ozs7QUNBQTs7OztvQkFLQ0MsYUFBUSxTQUFDO3dCQUNULFlBQVksRUFBRTs0QkFDYixjQUFjO3lCQUNkO3dCQUNELE9BQU8sRUFBRTs0QkFDUixjQUFjO3lCQUNkO3FCQUNEOzswQkFaRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9