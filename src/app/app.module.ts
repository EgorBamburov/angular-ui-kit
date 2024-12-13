import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ngIconsList} from './ng-icons/ng-icons-list';
import {NgIconsModule} from '@ng-icons/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons(ngIconsList)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
