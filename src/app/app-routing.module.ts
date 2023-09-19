import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {IndexComponent} from "./extras/index/index.component";
import {InitialComponent} from "./extras/initial/initial.component";
import {initialGuard} from "./extras/guards/initial.guard";

const routes: Routes = [
  {path: '', component: InitialComponent},
  {
    path: 'app', component: IndexComponent, children: [ //AppComponent abre index index maneja links de '' y auth
      {path: '', loadChildren: () => import('./modules/general/general.module').then(res => res.GeneralModule)},
      {path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(res => res.AuthModule)}
    ], canActivate: [initialGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
