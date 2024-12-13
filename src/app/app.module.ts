import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ngIconsList} from './ng-icons/ng-icons-list';
import {NgIconsModule} from '@ng-icons/core';
import {UiKitModule} from '@egor-bamburov/ng-ui-kit';
// import {UiKitModule} from '../../projects/ng-ui-kit/src/public-api';

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
