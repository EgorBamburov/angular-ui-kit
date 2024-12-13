import { Component } from '@angular/core';
// import {UiKitModule} from '../../../../projects/ng-ui-kit/src/public-api'

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [
    // UiKitModule
  ],
  templateUrl: './inputs.page.html',
  styleUrl: './inputs.page.scss'
})
export class InputsPage {
constructor() {
  console.log('123')
}
}
