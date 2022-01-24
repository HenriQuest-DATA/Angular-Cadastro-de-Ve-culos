import { CarsDeleteComponent } from './components/cars/cars-delete/cars-delete.component';
import { CarsUpdateComponent } from './components/cars/cars-update/cars-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { CarsCreateComponent } from './components/cars/cars-create/cars-create.component';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';


const routes: Routes = [{
  path: "",
  component: HomeComponent
}, 
{
  path: "adicionar",
  component: CarsCreateComponent
},
{
  path: "atualizar/:id",
  component: CarsUpdateComponent
},
{
  path: "apagar/:id",
  component: CarsDeleteComponent
}];

@NgModule({
  imports: [
    MatFormFieldModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatInputModule,
    MatCardModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
