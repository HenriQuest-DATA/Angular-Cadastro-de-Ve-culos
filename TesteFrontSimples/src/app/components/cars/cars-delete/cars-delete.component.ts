import { CarsService } from './../cars.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cars } from '../cars.model';

@Component({
  selector: 'app-cars-delete',
  templateUrl: './cars-delete.component.html',
  styleUrls: ['./cars-delete.component.css']
})
export class CarsDeleteComponent implements OnInit {

  car: Cars;

  constructor(private carsService: CarsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'))
    
    this.carsService.readById(id).subscribe(car => {
      this.car = car
    })
  }

  deleteCars(): void {
    this.carsService.delete(this.car).subscribe(() => {
      this.carsService.showMessage('Veículo apagado')
      this.router.navigate([''])
    })
  }

  cancel(): void {
    this.router.navigate([''])
  }

}
