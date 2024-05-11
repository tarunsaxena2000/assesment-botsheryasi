import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomemodulesComponent } from './homemodules.component';

const routes: Routes = [

   {path:"" ,component:HomemodulesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomemoduleRoutingModule { }
