import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitGuardService } from './services/init-guard.service';


const routes: Routes = [
  { path: 'login', component: LoginComponent,canActivate:[InitGuardService]},
  { path:'main', redirectTo:'/main',pathMatch:'full'},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}