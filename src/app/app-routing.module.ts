import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "./extras/index/index.component";
import {InitialComponent} from "./extras/initial/initial.component";
import {initialGuard} from "./extras/guards/initial.guard";
import {CensoredComponent} from "./modules/censored/censored.component";

const routes: Routes = [
  {path: '', component: InitialComponent},
  {
    path: 'app', component: IndexComponent, children: [ //AppComponent abre index index maneja links de '' y auth
      {path: '', loadChildren: () => import('./modules/general/general.module').then(res => res.GeneralModule)},
      {path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(res => res.AuthModule)},
      {path:'logged', component: CensoredComponent}
    ], canActivate: [initialGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
