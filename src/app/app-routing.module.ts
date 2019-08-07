import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserListComponent} from './user-list/user-list.component';
import {UserDetailComponent} from './user-detail/user-detail.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  { path: 'users', component: UserListComponent},
      {path: 'users/' + ':id', component: UserDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
