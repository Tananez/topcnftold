import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//-------COMPONENTS-------//
//-------Index
import { IndexLayoutComponent } from '../components/index/index-layout/index-layout.component';
import { IndexLoginComponent } from '../components/index/index-login/index-login.component';
import { IndexRegisterComponent } from '../components/index/index-register/index-register.component';
import { IndexRecoverComponent } from '../components/index/index-recover/index-recover.component';
//-------Admin
import { AdminLayoutComponent } from '../components/admin/admin-layout/admin-layout.component';
import { AdminDashboardComponent } from '../components/admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from '../components/admin/admin-login/admin-login.component';
import { AdminLogoutComponent } from '../components/admin/admin-logout/admin-logout.component';
//-------User
import { UserLayoutComponent } from '../components/user/user-layout/user-layout.component';
import { UserDashboardComponent } from '../components/user/user-dashboard/user-dashboard.component';
import { UserLogoutComponent } from '../components/user/user-logout/user-logout.component';
import { UserSettingsComponent } from '../components/user/user-settings/user-settings.component';

const routes: Routes = [

  { path: 'index', component: IndexLayoutComponent,
  children: [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: IndexLoginComponent },
    { path: 'register', component: IndexRegisterComponent },
    { path: 'recover', component: IndexRecoverComponent },
  ]
  },
  { path: 'user', component: UserLayoutComponent,
  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: UserDashboardComponent },
    { path: 'settings', component: UserSettingsComponent },
    { path: 'logout', component: UserLogoutComponent }
  ]
  },
  { path: 'admin', component: AdminLayoutComponent,
  children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: AdminDashboardComponent },
    { path: 'connect', component: AdminLoginComponent },
    { path: 'disconnect', component: AdminLogoutComponent }
  ]
  },
  { path: '**', component: IndexLayoutComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
