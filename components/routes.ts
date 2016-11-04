import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule}   from '@angular/router';
import { UserGuard }             from './services/user-guard.service';
import { HelloWorldComponent,
  LoginComponent,
  NewUserComponent,
  UserListComponent,
  UserComponent
} from './components';

const appRoutes: Routes = [
  { path: '', redirectTo:'home', pathMatch: 'full'},
  { path: 'home', component: HelloWorldComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new_user', component: NewUserComponent },
  { path: 'user/:name', component: UserComponent, canActivate: [UserGuard]},
  { path: 'list', component: UserListComponent },
  { path: '**', component: HelloWorldComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);