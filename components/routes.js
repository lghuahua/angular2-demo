import { provideRouter, RouterConfig, ActivatedRoute} from '@angular/router';
import { HelloWorldComponent,
  LoginComponent,
  UserListComponent
} from './components'

const routes: RouterConfig = [
  { path: '', redirectTo:'home', pathMatch: 'full'},
  { path: 'home', name: 'hello', component: HelloWorldComponent },
  { path: 'login', name: 'login', component: LoginComponent },
  { path: 'list', name: 'list', component: UserListComponent },
  { path: '**', component: HelloWorldComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];