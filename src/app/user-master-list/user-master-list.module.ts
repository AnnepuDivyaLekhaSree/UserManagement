import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {UserMasterListComponent} from './user-master-list.component';
import {UserMasterListRoutingModule} from './user-master-list-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [UserMasterListComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    UserMasterListRoutingModule,
    SharedModule,
    FlexLayoutModule

  ]
})
export class UserMasterListModule {
}
