import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { HeaderComponent } from './admin/header/header.component';
import { FilterComponent } from './admin/filter/filter.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminComponent } from './admin/admin/admin.component';
import { NgChartsModule } from 'ng2-charts';
import { SummaryCardsComponent } from './admin/summary-cards/summary-cards.component';
import { MonthlyTargetComponent } from './admin/monthly-target/monthly-target.component';
import { ActivateUserComponent } from './admin/activate-user/activate-user.component';
import { TopBrandComponent } from './admin/top-brand/top-brand.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FilterComponent,
    DashboardComponent,
    AdminComponent,
    SummaryCardsComponent,
    MonthlyTargetComponent,
    ActivateUserComponent,
    TopBrandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
