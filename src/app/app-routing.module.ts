import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {IndexComponent} from "./extras/index/index.component";

const routes: Routes = [
  {path:'',component:IndexComponent,children:[ //AppComponent abre index index maneja links de '' y auth
      {path:'', loadChildren:()=>import('./modules/general/general.module').then(res=>res.GeneralModule)},
      {path:'auth',loadChildren:()=>import('./modules/auth/auth.module').then(res=>res.AuthModule)}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
