import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
export class UiKitTextInput {
    placeholder = '';
    label = '';
    errorLabel = '';
    isShowError = false;
    value = '';
    onChange = () => { };
    onTouched = () => { };
    writeValue(value) {
        this.value = value;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    onInputChange(event) {
        this.value = event.target.value;
        this.onChange(event.target.value);
    }
    onBlur() {
        this.onTouched();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UiKitTextInput, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: UiKitTextInput, selector: "ui-kit-text-input", inputs: { placeholder: "placeholder", label: "label", errorLabel: "errorLabel", isShowError: "isShowError" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UiKitTextInput),
                multi: true,
            },
        ], ngImport: i0, template: "<div>\n  @if (label) {\n    <label class=\"info\">{{ label }}</label>\n  }\n\n  <input\n    class=\"primary-input\"\n    type=\"text\"\n    [class]=\"{ 'input-error': isShowError }\"\n    [value]=\"value\"\n    [placeholder]=\"placeholder\"\n    (input)=\"onInputChange($event)\"\n  >\n\n  @if (errorLabel && isShowError) {\n    <label class=\"error\">{{ errorLabel }}</label>\n  }\n</div>\n", styles: ["div{display:flex;flex-direction:column;gap:2px}div .info{font-size:var(--text-s);color:var(--secondary-text)}div .primary-input{box-sizing:border-box;width:100%;padding:5px;margin:0;border:1px solid var(--primary-border-color);border-radius:var(--radius-def);background:transparent;color:var(--primary-text)}div .input-error{border-color:var(--warning-text)}div .error{font-size:var(--text-s);color:var(--warning-text)}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UiKitTextInput, decorators: [{
            type: Component,
            args: [{ selector: 'ui-kit-text-input', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UiKitTextInput),
                            multi: true,
                        },
                    ], template: "<div>\n  @if (label) {\n    <label class=\"info\">{{ label }}</label>\n  }\n\n  <input\n    class=\"primary-input\"\n    type=\"text\"\n    [class]=\"{ 'input-error': isShowError }\"\n    [value]=\"value\"\n    [placeholder]=\"placeholder\"\n    (input)=\"onInputChange($event)\"\n  >\n\n  @if (errorLabel && isShowError) {\n    <label class=\"error\">{{ errorLabel }}</label>\n  }\n</div>\n", styles: ["div{display:flex;flex-direction:column;gap:2px}div .info{font-size:var(--text-s);color:var(--secondary-text)}div .primary-input{box-sizing:border-box;width:100%;padding:5px;margin:0;border:1px solid var(--primary-border-color);border-radius:var(--radius-def);background:transparent;color:var(--primary-text)}div .input-error{border-color:var(--warning-text)}div .error{font-size:var(--text-s);color:var(--warning-text)}\n"] }]
        }], propDecorators: { placeholder: [{
                type: Input
            }], label: [{
                type: Input
            }], errorLabel: [{
                type: Input
            }], isShowError: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkta2l0LXRleHQtaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy11aS1raXQvc3JjL2NvbXBvbmVudHMvdGV4dC1pbnB1dC91aS1raXQtdGV4dC1pbnB1dC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLXVpLWtpdC9zcmMvY29tcG9uZW50cy90ZXh0LWlucHV0L3VpLWtpdC10ZXh0LWlucHV0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBdUIsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFjdkUsTUFBTSxPQUFPLGNBQWM7SUFDaEIsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUNqQixLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ1gsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUNoQixXQUFXLEdBQUcsS0FBSyxDQUFBO0lBRXJCLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDWCxRQUFRLEdBQTRCLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztJQUM3QyxTQUFTLEdBQWUsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0lBRXhDLFVBQVUsQ0FBQyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUEyQjtRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBYztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQVU7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzt3R0E3QlUsY0FBYzs0RkFBZCxjQUFjLDBKQVJkO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQzdDLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRiwwQkNiSCx5WUFrQkE7OzRGREhhLGNBQWM7a0JBWjFCLFNBQVM7K0JBQ0UsbUJBQW1CLGFBR2xCO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQzs0QkFDN0MsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7OEJBR1EsV0FBVztzQkFBbkIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VpLWtpdC10ZXh0LWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VpLWtpdC10ZXh0LWlucHV0Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vdWkta2l0LXRleHQtaW5wdXQuc2NzcycsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVWlLaXRUZXh0SW5wdXQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVWlLaXRUZXh0SW5wdXQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJyc7XG4gIEBJbnB1dCgpIGxhYmVsID0gJyc7XG4gIEBJbnB1dCgpIGVycm9yTGFiZWwgPSAnJztcbiAgQElucHV0KCkgaXNTaG93RXJyb3IgPSBmYWxzZVxuXG4gIHB1YmxpYyB2YWx1ZSA9ICcnO1xuICBwdWJsaWMgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkID0gKCkgPT4ge307XG4gIHB1YmxpYyBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIG9uSW5wdXRDaGFuZ2UoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5vbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgb25CbHVyKCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gIH1cbn1cbiIsIjxkaXY+XG4gIEBpZiAobGFiZWwpIHtcbiAgICA8bGFiZWwgY2xhc3M9XCJpbmZvXCI+e3sgbGFiZWwgfX08L2xhYmVsPlxuICB9XG5cbiAgPGlucHV0XG4gICAgY2xhc3M9XCJwcmltYXJ5LWlucHV0XCJcbiAgICB0eXBlPVwidGV4dFwiXG4gICAgW2NsYXNzXT1cInsgJ2lucHV0LWVycm9yJzogaXNTaG93RXJyb3IgfVwiXG4gICAgW3ZhbHVlXT1cInZhbHVlXCJcbiAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgIChpbnB1dCk9XCJvbklucHV0Q2hhbmdlKCRldmVudClcIlxuICA+XG5cbiAgQGlmIChlcnJvckxhYmVsICYmIGlzU2hvd0Vycm9yKSB7XG4gICAgPGxhYmVsIGNsYXNzPVwiZXJyb3JcIj57eyBlcnJvckxhYmVsIH19PC9sYWJlbD5cbiAgfVxuPC9kaXY+XG4iXX0=