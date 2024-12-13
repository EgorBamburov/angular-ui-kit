import { Component } from '@angular/core';
import {UiKitModule} from '@egor-bamburov/ng-ui-kit';

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
}
