import {Component, Input} from '@angular/core';
import {ToastService} from './services/toast.service';

@Component({
  selector: 'ui-kit-toast',
  templateUrl: './ui-kit-toast.html',
  styleUrl: './ui-kit-toast.scss'
})
export class UiKitToast {
  @Input() icon: string = 'faSolidXmark';
  @Input() defaultDuration: number | string = 5000;
  constructor(public toastService: ToastService) {
    this.toastService.defaultDuration = +this.defaultDuration;
  }

  public close(): void {
    this.toastService.removeToast();
  }
}
