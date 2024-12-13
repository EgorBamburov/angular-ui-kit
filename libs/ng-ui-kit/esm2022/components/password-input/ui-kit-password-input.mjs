import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import * as i0 from "@angular/core";
import * as i1 from "@ng-icons/core";
export class UiKitPasswordInput {
    isShowPassword = false;
    placeholder = '';
    toggleShowPassword = new EventEmitter();
    value = '';
    onChange = () => { };
    onTouched = () => { };
    onToggle() {
        this.toggleShowPassword.emit();
    }
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UiKitPasswordInput, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: UiKitPasswordInput, selector: "ui-kit-password-input", inputs: { isShowPassword: "isShowPassword", placeholder: "placeholder" }, outputs: { toggleShowPassword: "toggleShowPassword" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UiKitPasswordInput),
                multi: true,
            },
        ], ngImport: i0, template: "<div class=\"primary-password-input\">\n  <input\n    [placeholder]=\"placeholder\"\n    [type]=\"isShowPassword ? 'text' : 'password'\"\n    [value]=\"value\"\n    (input)=\"onInputChange($event)\"\n  >\n\n  <ng-icon\n    (click)=\"onToggle()\"\n    [name]=\"isShowPassword ? 'faSolidEyeSlash' : 'faSolidEye'\"\n  />\n</div>\n", styles: [".primary-password-input{display:flex;flex-direction:row;align-items:center;padding:5px;border:1px solid var(--primary-border-color);border-radius:var(--radius-def)}.primary-password-input input{width:100%;border:none;margin:0;padding:0;background:none;color:var(--primary-text)}.primary-password-input ng-icon{cursor:pointer;color:var(--primary-btn-bg)}\n"], dependencies: [{ kind: "component", type: i1.NgIcon, selector: "ng-icon", inputs: ["name", "svg", "size", "strokeWidth", "color"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UiKitPasswordInput, decorators: [{
            type: Component,
            args: [{ selector: 'ui-kit-password-input', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UiKitPasswordInput),
                            multi: true,
                        },
                    ], template: "<div class=\"primary-password-input\">\n  <input\n    [placeholder]=\"placeholder\"\n    [type]=\"isShowPassword ? 'text' : 'password'\"\n    [value]=\"value\"\n    (input)=\"onInputChange($event)\"\n  >\n\n  <ng-icon\n    (click)=\"onToggle()\"\n    [name]=\"isShowPassword ? 'faSolidEyeSlash' : 'faSolidEye'\"\n  />\n</div>\n", styles: [".primary-password-input{display:flex;flex-direction:row;align-items:center;padding:5px;border:1px solid var(--primary-border-color);border-radius:var(--radius-def)}.primary-password-input input{width:100%;border:none;margin:0;padding:0;background:none;color:var(--primary-text)}.primary-password-input ng-icon{cursor:pointer;color:var(--primary-btn-bg)}\n"] }]
        }], propDecorators: { isShowPassword: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], toggleShowPassword: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkta2l0LXBhc3N3b3JkLWlucHV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctdWkta2l0L3NyYy9jb21wb25lbnRzL3Bhc3N3b3JkLWlucHV0L3VpLWtpdC1wYXNzd29yZC1pbnB1dC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLXVpLWtpdC9zcmMvY29tcG9uZW50cy9wYXNzd29yZC1pbnB1dC91aS1raXQtcGFzc3dvcmQtaW5wdXQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN6RixPQUFPLEVBQXVCLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7OztBQWN2RSxNQUFNLE9BQU8sa0JBQWtCO0lBQ3BCLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDdkIsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUVoQixrQkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFBO0lBRTFDLEtBQUssR0FBVyxFQUFFLENBQUM7SUFDbkIsUUFBUSxHQUE0QixHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7SUFDN0MsU0FBUyxHQUFlLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztJQUVqQyxRQUFRO1FBQ2IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFBO0lBQ2hDLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsRUFBMkI7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQWM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFVO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7d0dBakNVLGtCQUFrQjs0RkFBbEIsa0JBQWtCLGlMQVJsQjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUM7Z0JBQ2pELEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRiwwQkNiSCx5VUFhQTs7NEZERWEsa0JBQWtCO2tCQVo5QixTQUFTOytCQUNFLHVCQUF1QixhQUd0Qjt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxtQkFBbUIsQ0FBQzs0QkFDakQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7OEJBR1EsY0FBYztzQkFBdEIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUVJLGtCQUFrQjtzQkFBM0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIElucHV0LCBPdXRwdXQsIHNpZ25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VpLWtpdC1wYXNzd29yZC1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1raXQtcGFzc3dvcmQtaW5wdXQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi91aS1raXQtcGFzc3dvcmQtaW5wdXQuc2NzcycsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVWlLaXRQYXNzd29yZElucHV0KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFVpS2l0UGFzc3dvcmRJbnB1dCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KCkgaXNTaG93UGFzc3dvcmQgPSBmYWxzZTtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnJztcblxuICBAT3V0cHV0KCkgdG9nZ2xlU2hvd1Bhc3N3b3JkID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgcHVibGljIHZhbHVlOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCA9ICgpID0+IHt9O1xuICBwdWJsaWMgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgcHVibGljIG9uVG9nZ2xlKCk6IHZvaWQge1xuICAgIHRoaXMudG9nZ2xlU2hvd1Bhc3N3b3JkLmVtaXQoKVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBvbklucHV0Q2hhbmdlKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMub25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIG9uQmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwicHJpbWFyeS1wYXNzd29yZC1pbnB1dFwiPlxuICA8aW5wdXRcbiAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgIFt0eXBlXT1cImlzU2hvd1Bhc3N3b3JkID8gJ3RleHQnIDogJ3Bhc3N3b3JkJ1wiXG4gICAgW3ZhbHVlXT1cInZhbHVlXCJcbiAgICAoaW5wdXQpPVwib25JbnB1dENoYW5nZSgkZXZlbnQpXCJcbiAgPlxuXG4gIDxuZy1pY29uXG4gICAgKGNsaWNrKT1cIm9uVG9nZ2xlKClcIlxuICAgIFtuYW1lXT1cImlzU2hvd1Bhc3N3b3JkID8gJ2ZhU29saWRFeWVTbGFzaCcgOiAnZmFTb2xpZEV5ZSdcIlxuICAvPlxuPC9kaXY+XG4iXX0=