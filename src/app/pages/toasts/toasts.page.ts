import { Component } from '@angular/core';
import {UiKitModule} from '../../modules/ui-kit/ui-kit.module';
import {ToastService} from '../../modules/ui-kit/components/toast/services/toast.service';

@Component({
  selector: 'app-toasts',
  standalone: true,
  imports: [
    UiKitModule
  ],
  templateUrl: './toasts.page.html',
  styleUrl: './toasts.page.scss'
})
export class ToastsPage {
  constructor(private toastService: ToastService) {
    this.toastService.addToast({
      title: 'test',
      message: 'test message',
      type: 'error'
    })
  }
}
