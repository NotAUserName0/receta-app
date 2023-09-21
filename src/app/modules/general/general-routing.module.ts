import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {InsertComponent} from "./views/insert/insert.component";
import {sessionGuard} from "../genGuards/no-logged.guard";
import {SearchComponent} from "./views/search/search.component";
import {NotificationsComponent} from "./views/notifications/notifications.component";
import {FavoritesComponent} from "./views/favorites/favorites.component";
import {ProfileComponent} from "./views/profile/profile.component";

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'insert', component: InsertComponent,canActivate:[sessionGuard]},
  {path:'search', component: SearchComponent},
  {path:'notifications', component:NotificationsComponent, canActivate:[sessionGuard]},
  {path:'favorites', component:FavoritesComponent, canActivate:[sessionGuard]},
  {path:'profile', component:ProfileComponent, canActivate:[sessionGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule {
}
