import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UiKitModule} from '@egor-bamburov/ng-ui-kit';
import {NgIconsModule} from '@ng-icons/core';
import {ngIconsList} from '../../../../src/app/ng-icons/ng-icons-list';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons(ngIconsList),
    UiKitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
