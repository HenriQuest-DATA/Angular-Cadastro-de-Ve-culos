import { Cars } from './../cars.model';
import { CarsService } from './../cars.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars-create',
  templateUrl: './cars-create.component.html',
  styleUrls: ['./cars-create.component.css']
})


export class CarsCreateComponent implements OnInit {

  car: Cars = {
    veiculo: '',
    tipo: 'Van',
    marca: '',
    placa: '',
    tipo_veiculo: '',
    status: 'Ativo'
  }

  constructor(private carsService: CarsService, private router: Router) { }

  ngOnInit(): void {
  }

  createCars(): void {
    this.carsService.create(this.car).subscribe(() => {
      this.carsService.showMessage("Veículo salvo com sucesso");
      this.router.navigate(['']);
    })
  }

  cancel(): void {
    this.router.navigate(['']);
  }


}
