import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const defaultRoute = '/userList';
const APP_ROUTES: Routes = [{
  path: 'userList',
  loadChildren: () => import('./user-master-list/user-master-list.module').then(m => m.UserMasterListModule),
  data: {title: 'UserList'}
},
  {path: '', redirectTo: defaultRoute, pathMatch: 'full'},
  {path: '**', redirectTo: defaultRoute}];

@NgModule({

  imports: [RouterModule.forRoot(
    APP_ROUTES,
    {
      enableTracing: false, // <-- set to 'true' for debugging purposes only
      useHash: false,
      relativeLinkResolution: 'legacy'
    }
  )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
