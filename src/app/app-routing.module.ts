import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StartComponent } from './components/start/start.component';

const routes: Routes = [
  {path: '', component: StartComponent },
  {path: 'user', loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)},
  {path: 'dashboard', component:DashboardComponent, loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: '*', redirectTo: '/', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
