import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserMasterListComponent} from './user-master-list.component';

const routes: Routes = [
  {path: '', component: UserMasterListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserMasterListRoutingModule {
}
