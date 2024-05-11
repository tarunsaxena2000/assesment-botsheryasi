import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetComponent } from './components/get/get.component';
import { CreateComponent } from './components/create/create.component';
import { DashboardmodulesComponent } from './components/dashboardmodules/dashboardmodules.component';
import { SettingsmoduleModule } from './components/settingsmodules/settingsmodule.module';
import { HomemoduleModule } from './components/homemodules/homemodule.module';

const routes: Routes = [

    {component:GetComponent,path:"get"},
    {path:"create",component:CreateComponent},
    {path:"dashboard",component:DashboardmodulesComponent},
    {path:"setting",component:SettingsmoduleModule},
    {path:"home",component:HomemoduleModule},

    {loadChildren:()=>import('./components/homemodules/homemodule.module').then(m=>m.HomemoduleModule),path:'home'},
    {loadChildren:()=>import('./components/dashboardmodules/dashboardmodules.module').then(m=>m.DashboardmodulesModule),path:'dashboard'},
    {loadChildren:()=>import('./components/settingsmodules/settingsmodule.module').then(m=>m.SettingsmoduleModule),path:'setting'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
