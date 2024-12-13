import * as i0 from '@angular/core';
import { EventEmitter, forwardRef, Component, Input, Output, signal, Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i1 from '@ng-icons/core';
import { NgIconsModule, NgIcon } from '@ng-icons/core';

class UiKitPasswordInput {
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

class ToastService {
    toast$ = signal(null);
    defaultDuration = 2000;
    timeout = 0;
    constructor() { }
    addToast(toast) {
        const toastClone = { ...toast };
        if (!toast.title) {
            switch (toast.type) {
                case 'error':
                    toastClone.title = 'Ошибка';
                    break;
                case 'warning':
                    toastClone.title = 'Предупреждение';
                    break;
                case 'success':
                    toastClone.title = 'Успешно';
                    break;
            }
        }
        this.toast$.set(toastClone);
        this.setToastTimeOut(toastClone.duration);
    }
    removeToast() {
        clearTimeout(this.timeout);
        this.toast$.set(null);
    }
    setToastTimeOut(duration) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.removeToast();
        }, duration || this.defaultDuration);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ToastService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ToastService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ToastService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class UiKitToast {
    toastService;
    icon = 'faSolidXmark';
    defaultDuration = 5000;
    constructor(toastService) {
        this.toastService = toastService;
        this.toastService.defaultDuration = +this.defaultDuration;
    }
    close() {
        this.toastService.removeToast();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UiKitToast, deps: [{ token: ToastService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: UiKitToast, selector: "ui-kit-toast", inputs: { icon: "icon", defaultDuration: "defaultDuration" }, ngImport: i0, template: "@if (toastService.toast$()) {\n  <div class=\"toast\" [class]=\"toastService.toast$()?.type\">\n    <div class=\"close\">\n      <ng-icon [name]=\"icon\" (click)=\"close()\" />\n    </div>\n\n    <h2 class=\"title\">{{ toastService.toast$()?.title }}</h2>\n    <p class=\"message\">{{ toastService.toast$()?.message }}</p>\n  </div>\n}\n\n", styles: [".toast{color:var(--toast-text-color);position:fixed;top:5px;right:5px;padding:5px 10px;border-radius:10px;width:250px;display:flex;flex-direction:column;gap:10px}.toast .close{display:flex;flex-direction:row;justify-content:flex-end}.toast .title{margin:0;text-align:center;font-weight:400;font-size:16px}.toast .message{margin:0;text-align:left;text-wrap:normal;font-size:14px}.error{background:var(--toast-danger-bg-color)}.success{background:var(--toast-success-bg-color)}.warning{background:var(--toast-warning-bg-color)}\n"], dependencies: [{ kind: "component", type: i1.NgIcon, selector: "ng-icon", inputs: ["name", "svg", "size", "strokeWidth", "color"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UiKitToast, decorators: [{
            type: Component,
            args: [{ selector: 'ui-kit-toast', template: "@if (toastService.toast$()) {\n  <div class=\"toast\" [class]=\"toastService.toast$()?.type\">\n    <div class=\"close\">\n      <ng-icon [name]=\"icon\" (click)=\"close()\" />\n    </div>\n\n    <h2 class=\"title\">{{ toastService.toast$()?.title }}</h2>\n    <p class=\"message\">{{ toastService.toast$()?.message }}</p>\n  </div>\n}\n\n", styles: [".toast{color:var(--toast-text-color);position:fixed;top:5px;right:5px;padding:5px 10px;border-radius:10px;width:250px;display:flex;flex-direction:column;gap:10px}.toast .close{display:flex;flex-direction:row;justify-content:flex-end}.toast .title{margin:0;text-align:center;font-weight:400;font-size:16px}.toast .message{margin:0;text-align:left;text-wrap:normal;font-size:14px}.error{background:var(--toast-danger-bg-color)}.success{background:var(--toast-success-bg-color)}.warning{background:var(--toast-warning-bg-color)}\n"] }]
        }], ctorParameters: () => [{ type: ToastService }], propDecorators: { icon: [{
                type: Input
            }], defaultDuration: [{
                type: Input
            }] } });

class UiKitTextInput {
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

class UiKitModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UiKitModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: UiKitModule, declarations: [UiKitPasswordInput,
            UiKitToast,
            UiKitTextInput], imports: [CommonModule,
            NgIconsModule,
            FormsModule,
            NgIcon,
            ReactiveFormsModule], exports: [UiKitPasswordInput,
            UiKitToast,
            UiKitTextInput] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UiKitModule, imports: [CommonModule,
            NgIconsModule,
            FormsModule,
            NgIcon,
            ReactiveFormsModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UiKitModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        UiKitPasswordInput,
                        UiKitToast,
                        UiKitTextInput
                    ],
                    exports: [
                        UiKitPasswordInput,
                        UiKitToast,
                        UiKitTextInput,
                    ],
                    imports: [
                        CommonModule,
                        NgIconsModule,
                        FormsModule,
                        NgIcon,
                        ReactiveFormsModule
                    ]
                }]
        }] });

/*
 * Public API Surface of ui-kit
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ToastService, UiKitModule, UiKitPasswordInput, UiKitTextInput, UiKitToast };
//# sourceMappingURL=egor-bamburov-ng-ui-kit.mjs.map
