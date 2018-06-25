import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SystemControlComponent } from './main/system-control/system-control.component';
import { SystemStatusComponent } from './main/system-status/system-status.component';
import { LoadContentComponent } from './main/load-content/load-content.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './main/home/home.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'load-content', component: LoadContentComponent },
    { path: 'system-control', component: SystemControlComponent },
    { path: 'system-status', component: SystemStatusComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SystemControlComponent,
    SystemStatusComponent,
    LoadContentComponent,
    AuthComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
