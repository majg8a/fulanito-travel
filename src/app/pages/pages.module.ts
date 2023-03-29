import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './pages/home.component';
import { TravelServicesComponent } from './pages/travel-services.component';

@NgModule({
  declarations: [PagesComponent, HomeComponent, TravelServicesComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
