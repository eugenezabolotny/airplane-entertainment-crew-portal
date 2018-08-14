import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SystemControlComponent } from './main/system-control/system-control.component';
import { SystemStatusComponent } from './main/system-status/system-status.component';
import { LoadContentComponent } from './main/load-content/load-content.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './main/home/home.component';
import { ModemStatusComponent } from './main/modem-status/modem-status.component';
import { DevicesStatusComponent } from './main/devices-status/devices-status.component';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'load-content', component: LoadContentComponent },
    { path: 'system-control', component: SystemControlComponent },
    { path: 'system-status', component: SystemStatusComponent },
    { path: 'modem-status', component: ModemStatusComponent },
    { path: 'devices-status', component: DevicesStatusComponent },
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
    ModemStatusComponent,
    DevicesStatusComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    TableModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
