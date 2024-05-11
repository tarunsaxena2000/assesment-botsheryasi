import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GetComponent } from './components/get/get.component';
import { CreateComponent } from './components/create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomemodulesComponent } from './components/homemodules/homemodules.component';
import { DashboardmodulesComponent } from './components/dashboardmodules/dashboardmodules.component';
import { SettingsmodulesComponent } from './components/settingsmodules/settingsmodules.component';

@NgModule({
  declarations: [
    AppComponent,
    GetComponent,
    CreateComponent,
    HomemodulesComponent,
    DashboardmodulesComponent,
    SettingsmodulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
