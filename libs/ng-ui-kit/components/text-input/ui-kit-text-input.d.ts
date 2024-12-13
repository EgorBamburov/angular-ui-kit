import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class UiKitTextInput implements ControlValueAccessor {
    placeholder: string;
    label: string;
    errorLabel: string;
    isShowError: boolean;
    value: string;
    onChange: (value: string) => void;
    onTouched: () => void;
    writeValue(value: string): void;
    registerOnChange(fn: (value: string) => void): void;
    registerOnTouched(fn: () => void): void;
    onInputChange(event: any): void;
    onBlur(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UiKitTextInput, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UiKitTextInput, "ui-kit-text-input", never, { "placeholder": { "alias": "placeholder"; "required": false; }; "label": { "alias": "label"; "required": false; }; "errorLabel": { "alias": "errorLabel"; "required": false; }; "isShowError": { "alias": "isShowError"; "required": false; }; }, {}, never, never, false, never>;
}
