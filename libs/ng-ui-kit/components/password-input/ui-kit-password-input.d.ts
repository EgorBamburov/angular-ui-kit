import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from "@angular/forms";
import * as i0 from "@angular/core";
export declare class UiKitPasswordInput implements ControlValueAccessor {
    isShowPassword: boolean;
    placeholder: string;
    toggleShowPassword: EventEmitter<any>;
    value: string;
    onChange: (value: string) => void;
    onTouched: () => void;
    onToggle(): void;
    writeValue(value: string): void;
    registerOnChange(fn: (value: string) => void): void;
    registerOnTouched(fn: () => void): void;
    onInputChange(event: any): void;
    onBlur(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UiKitPasswordInput, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UiKitPasswordInput, "ui-kit-password-input", never, { "isShowPassword": { "alias": "isShowPassword"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; }, { "toggleShowPassword": "toggleShowPassword"; }, never, never, false, never>;
}
