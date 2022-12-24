//-------Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppApiModule } from './modules/app-api.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//Translation Module
import { AppTranslateModule } from './modules/app-translate.module';
//UI Modules
import { AppMaterialModule } from './modules/app-material.module';
import { AppBootstrapModule } from './modules/app-bootstrap.module';
import { AppPrimengModule } from './modules/app-primeng.module';
//-------Pipes
import { GetKeysPipe } from './pipes/get-keys.pipe';
import { GetSumPipe } from './pipes/get-sum.pipe';
import { GetTimePipe } from './pipes/get-time.pipe';
import { GetVarsPipe } from './pipes/get-vars.pipe';

//-------COMPONENTS-------//
//-------Index
import { AppComponent } from './app.component';
import { IndexLayoutComponent } from './components/index/index-layout/index-layout.component';
import { IndexLoginComponent } from './components/index/index-login/index-login.component';
import { IndexRegisterComponent } from './components/index/index-register/index-register.component';
import { IndexRecoverComponent } from './components/index/index-recover/index-recover.component';
//-------Admin
import { AdminLayoutComponent } from './components/admin/admin-layout/admin-layout.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminLogoutComponent } from './components/admin/admin-logout/admin-logout.component';
//-------User
import { UserLayoutComponent } from './components/user/user-layout/user-layout.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { UserLogoutComponent } from './components/user/user-logout/user-logout.component';
import { UserSettingsComponent } from './components/user/user-settings/user-settings.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexLayoutComponent,
    IndexLoginComponent,
    IndexRegisterComponent,
    IndexRecoverComponent,
    AdminLayoutComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    AdminLogoutComponent,
    UserLayoutComponent,
    UserDashboardComponent,
    UserLogoutComponent,
    UserSettingsComponent,
    GetKeysPipe,
    GetSumPipe,
    GetTimePipe,
    GetVarsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppTranslateModule,
    AppApiModule,
    AppMaterialModule,
    AppBootstrapModule,
    AppPrimengModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
