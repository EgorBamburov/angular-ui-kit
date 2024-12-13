import { Component } from '@angular/core';
// import {UiKitModule} from '../../../../projects/ui-kit/src/public-api';
import {UiKitModule} from '../../../../dist/ui-kit';

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
