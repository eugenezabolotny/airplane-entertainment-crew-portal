import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SystemControlComponent } from './main/system-control/system-control.component';
import { SystemStatusComponent } from './main/system-status/system-status.component';
import { LoadContentComponent } from './main/load-content/load-content.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SystemControlComponent,
    SystemStatusComponent,
    LoadContentComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
