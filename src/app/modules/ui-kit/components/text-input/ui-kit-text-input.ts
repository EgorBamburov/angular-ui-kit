import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'ui-kit-text-input',
  templateUrl: './ui-kit-text-input.html',
  styleUrl: './ui-kit-text-input.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiKitTextInput),
      multi: true,
    },
  ],
})
export class UiKitTextInput implements ControlValueAccessor {
  @Input() placeholder = '';
  @Input() label = '';
  @Input() errorLabel = '';
  @Input() isShowError = false

  public value = '';
  public onChange: (value: string) => void = () => {};
  public onTouched: () => void = () => {};

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
