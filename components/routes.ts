import { provideRouter, RouterConfig} from '@angular/router';
import { HelloWorldComponent,
  LoginComponent,
  NewUserComponent,
  UserListComponent,
  UserComponent
} from './components';

const routes: RouterConfig = [
  { path: '', redirectTo:'home', pathMatch: 'full'},
  { path: 'home', component: HelloWorldComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new_user', component: NewUserComponent },
  { path: 'user/:name', component: UserComponent },
  { path: 'list', component: UserListComponent },
  { path: '**', component: HelloWorldComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];