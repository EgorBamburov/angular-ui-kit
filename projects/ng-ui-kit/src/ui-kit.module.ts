import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiKitPasswordInput} from './components/password-input/ui-kit-password-input';
import {NgIcon, NgIconsModule} from '@ng-icons/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UiKitToast} from './components/toast/ui-kit-toast';
import {UiKitTextInput} from './components/text-input/ui-kit-text-input';
import {ToastService} from './components/toast/services/toast.service';

@NgModule({
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
})
export  class UiKitModule {}
