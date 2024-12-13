import { Component } from '@angular/core';
import {ToastService, UiKitModule} from '@egor-bamburov/ng-ui-kit';

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
