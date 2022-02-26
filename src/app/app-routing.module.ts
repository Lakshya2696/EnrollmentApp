import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  { path: '', component: LoginComponent
},
{ path: 'login', component: LoginComponent
},
{ path: 'register', component: RegisterComponent
},
{ path: 'dashboard', component: DashboardComponent,
children: [
  {
    path:'', component: EnrollmentComponent
  },
  {
    path:'enrollment-form', component: EnrollmentComponent
  },
  {
    path:'enrollment-form/:id', component: EnrollmentComponent
  },
  {
    path:'user-list', component: UsersComponent
  }
]
}
  // { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
