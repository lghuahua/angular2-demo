import { provideRouter, RouterConfig, ActivatedRoute} from '@angular/router';
import { HelloWorldComponent,
  LoginComponent,
  NewUserComponent,
  UserListComponent
} from './components'

const routes: RouterConfig = [
  { path: '', redirectTo:'home', pathMatch: 'full'},
  { path: 'home', name: 'hello', component: HelloWorldComponent },
  { path: 'login', name: 'login', component: LoginComponent },
  { path: 'new_user', name: 'new_user', component: NewUserComponent },
  { path: 'list', name: 'list', component: UserListComponent },
  { path: '**', component: HelloWorldComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];