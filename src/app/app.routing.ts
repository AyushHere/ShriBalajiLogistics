import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { AdminComponent } from './components/admin/admin.component';
import { ClientComponent } from './components/client/client.component';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';
import { SubordinateComponent } from './components/subordinate/subordinate.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: HomeComponent },
    { path: 'professionals',             component: SubordinateComponent },
    // { path: 'admin',             component: AdminComponent },
    // { path: 'client',             component: ClientComponent },
    { path: 'element',             component: ComponentsComponent },
    { path: 'marketplace',             component: MarketplaceComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)  
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
