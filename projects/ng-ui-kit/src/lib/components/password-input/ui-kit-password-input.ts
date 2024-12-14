import {Component, EventEmitter, forwardRef, Input, Output, signal} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'ui-kit-password-input',
  templateUrl: './ui-kit-password-input.html',
  styleUrl: './ui-kit-password-input.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiKitPasswordInput),
      multi: true,
    },
  ],
})
export class UiKitPasswordInput implements ControlValueAccessor {
  @Input() isShowPassword = false;
  @Input() placeholder = '';
  @Input() label = '';
  @Input() errorLabel = '';
  @Input() isShowError = true;

  @Output() toggleShowPassword = new EventEmitter()

  public value: string = '';
  public onChange: (value: string) => void = () => {};
  public onTouched: () => void = () => {};

  public onToggle(): void {
    this.toggleShowPassword.emit()
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onInputChange(event: any): void {
    this.value = event.target.value;
    this.onChange(event.target.value);
  }

  onBlur(): void {
    this.onTouched();
  }
}
