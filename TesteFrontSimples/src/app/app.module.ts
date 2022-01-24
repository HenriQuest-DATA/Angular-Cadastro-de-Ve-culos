import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from './components/templates/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { MatExpansionModule } from '@angular/material/expansion';
import { HomeComponent } from './views/home/home.component';

import { HeaderComponent } from './components/templates/header/header.component';
import { SearchComponent } from './views/search/search.component';
import { BannerComponent } from './views/banner/banner.component';
import { CarsCrudComponent } from './views/cars-crud/cars-crud.component';

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CarsCreateComponent } from './components/cars/cars-create/cars-create.component';
import { CarsReadComponent } from './components/cars/cars-read/cars-read.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { CarsUpdateComponent } from './components/cars/cars-update/cars-update.component';
import { CarsDeleteComponent } from './components/cars/cars-delete/cars-delete.component';
import { MatPaginatorIntl } from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    SearchComponent,
    BannerComponent,
    CarsCrudComponent,
    CarsCreateComponent,
    CarsReadComponent,
    CarsUpdateComponent,
    CarsDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
