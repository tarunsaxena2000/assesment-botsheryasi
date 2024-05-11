import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardmodulesModule } from './dashboardmodules.module';

const routes: Routes = [
    {path:"dashboard" ,component:DashboardmodulesModule} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardmodulesRoutingModule { }
