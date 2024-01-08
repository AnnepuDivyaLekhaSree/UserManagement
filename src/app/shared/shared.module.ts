import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [FlexLayoutModule, MatTableModule,
    MatExpansionModule, MatPaginatorModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    MatTableModule,
    MatExpansionModule,
    MatButtonModule,
    MatPaginatorModule,
    MatInputModule,
    FormsModule
  ],
  declarations: [
  ]
})
export class SharedModule {
}
