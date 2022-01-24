import { CarsService } from './../cars.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cars } from '../cars.model';

@Component({
  selector: 'app-cars-update',
  templateUrl: './cars-update.component.html',
  styleUrls: ['./cars-update.component.css']
})
export class CarsUpdateComponent implements OnInit {

  car: Cars;

  constructor(private carsService: CarsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'))
    
    this.carsService.readById(id).subscribe(car => {
      this.car = car
    })
  }

  updateCars(): void {
    this.carsService.update(this.car).subscribe(() => {
      this.carsService.showMessage('Veículo atualizado')
      this.router.navigate([''])
    })
  }

  cancel(): void {
    this.router.navigate([''])
  }
}
