import { Injectable, signal} from '@angular/core';
import {IToast} from '../interfaces';

@Injectable({
  providedIn: 'root',

})
export class ToastService {
  public toast$ = signal<IToast | null>(null)
  public defaultDuration: number = 2000;

  private timeout: number = 0;

  constructor() {}

  public addToast(toast: IToast): void {
    const toastClone: IToast = { ...toast }

    if (!toast.title) {
      switch (toast.type) {
        case 'error':
          toastClone.title = 'Ошибка'
          break;
        case 'warning':
          toastClone.title = 'Предупреждение'
          break;
        case 'success':
          toastClone.title = 'Успешно'
          break;
      }
    }

    this.toast$.set(toastClone)
    this.setToastTimeOut(toastClone.duration)
  }

  public removeToast(): void {
    clearTimeout(this.timeout)
    this.toast$.set(null);
  }

  private setToastTimeOut(duration?: number): void {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.removeToast()
    },  duration || this.defaultDuration)
  }
}
