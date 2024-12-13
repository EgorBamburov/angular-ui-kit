import { Component } from '@angular/core';
import {UiKitModule} from '../../modules/ui-kit/ui-kit.module';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [
    UiKitModule
  ],
  templateUrl: './inputs.page.html',
  styleUrl: './inputs.page.scss'
})
export class InputsPage {
constructor() {
  console.log('123')
}
}
