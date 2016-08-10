import { provideRouter, RouterConfig} from '@angular/router';
import { HelloWorldComponent,
  LoginComponent,
  NewUserComponent,
  UserListComponent
} from './components';

const routes: RouterConfig = [
  { path: '', redirectTo:'home', pathMatch: 'full'},
  { path: 'home', component: HelloWorldComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new_user', component: NewUserComponent },
  { path: 'list', component: UserListComponent },
  { path: '**', component: HelloWorldComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];