import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.page.html',
  styleUrl: './main.page.scss'
})
export class MainPage {
  public copyOnClipBoard(event: any): void {
    navigator.clipboard.writeText(event.target.textContent)
  }
}
