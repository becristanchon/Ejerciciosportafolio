import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatTreeModule} from '@angular/material/tree';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  imports: [MatButtonModule,MatTabsModule,MatGridListModule,MatDatepickerModule,MatTableModule,MatChipsModule,MatExpansionModule,MatAutocompleteModule,MatSelectModule,MatCardModule,MatSidenavModule,MatTreeModule, MatCheckboxModule,MatToolbarModule,MatDialogModule,MatFormFieldModule,MatInputModule],
  exports: [MatButtonModule,MatTabsModule,MatGridListModule,MatDatepickerModule,MatTableModule,MatChipsModule,MatExpansionModule,MatAutocompleteModule,MatSelectModule,MatCardModule,MatSidenavModule, MatTreeModule,MatCheckboxModule,MatToolbarModule,MatDialogModule,MatFormFieldModule,MatInputModule],
})
export class MaterialModule {
 }