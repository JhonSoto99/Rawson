import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {EmployeesComponent} from './employees/employees.component';


const routes: Routes = [
  { path: '', component: HomeComponent,  pathMatch: 'full', data: { title: 'Home' } },
  { path: 'employees', component: EmployeesComponent,  pathMatch: 'full', data: { title: 'Emplyees' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
