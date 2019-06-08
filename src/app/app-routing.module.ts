import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListPages } from './pages/UserList/UserList.pages';
import { UsersPages } from './pages/Users/Users.pages';
import { UsersPages2 } from './pages/UsersX/Users.pages';

const routes: Routes = [
  { path: '', component: UserListPages },
  { path: 'users', component: UsersPages },
  { path: 'users/:id', component: UsersPages },
  { path: 'user/xamarim', component: UsersPages2 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
