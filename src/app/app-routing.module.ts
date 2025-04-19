import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { HeaderComponent } from './admin/header/header.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { FilterComponent } from './admin/filter/filter.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

const routes: Routes = [
  {path:'admin' , component:AdminComponent},
  {path:'app-header' , component:HeaderComponent},
  {path:'app-sidebar' , component:SidebarComponent},
  {path:'app-filter' , component:FilterComponent},
  {path:'app-dashboard' , component:DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
