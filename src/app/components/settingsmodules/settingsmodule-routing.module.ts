import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsmoduleModule } from './settingsmodule.module';

const routes: Routes = [
    {path:"setting" ,component:SettingsmoduleModule}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsmoduleRoutingModule { }
