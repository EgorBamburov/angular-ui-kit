import {Component, OnInit} from '@angular/core';
import {IToast, ToastService, TToastStatus, UiKitModule} from '@egor-bamburov/ng-ui-kit';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-toasts',
  standalone: true,
  imports: [
    UiKitModule,
    ReactiveFormsModule
  ],
  templateUrl: './toasts.page.html',
  styleUrl: './toasts.page.scss'
})
export class ToastsPage implements OnInit {
  public toastForm!: FormGroup;

  constructor(
    private toastService: ToastService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initToastForm()
  }

  public createToast(status: TToastStatus): void {
    const { message, title } = this.toastForm.value;
    const toast: IToast = {
      title,
      message,
      status,
    };

    this.toastService.addToast(toast);
  }

  private initToastForm(): void {
    this.toastForm = this.fb.group({
      title: ['Title'],
      message: ['Message'],
    })
  }
}
