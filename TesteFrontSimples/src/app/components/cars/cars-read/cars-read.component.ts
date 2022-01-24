import { MatPaginator } from '@angular/material/paginator';
import { CarsService } from './../cars.service';
import { Cars } from './../cars.model';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { tap } from 'rxjs';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-cars-read',
  templateUrl: './cars-read.component.html',
  styleUrls: ['./cars-read.component.css']
})
export class CarsReadComponent implements OnInit, AfterViewInit {

  cars: Cars[] = [];
  carsLG: number = 0;
  carsRow: Cars[] = [];
  displayedColumns = ['checkbox', 'id', 'tipo', 'marca', 'placa', 'tipo_veiculo', 'status', 'actions'];
  dataSource = new MatTableDataSource(this.cars);
  index: number = 0;
  pageSize: number = 0;

  @ViewChild(MatPaginator)paginator: MatPaginator;
  
  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.carsService.read().subscribe(cars => {
      this.carsLG = cars.length;
      this.cars = cars.slice(this.paginator.pageIndex*this.paginator.pageSize, ((this.paginator.pageIndex*this.paginator.pageSize)+this.paginator.pageSize));
    })
  }

  ngAfterViewInit(): void {
      this.paginator.page.pipe(
        tap(() => {
          this.carsService.read().subscribe(cars => {
            this.carsLG = cars.length;
            this.cars = cars.slice(this.paginator.pageIndex*this.paginator.pageSize, ((this.paginator.pageIndex*this.paginator.pageSize)+this.paginator.pageSize));
          })
        })
      ).subscribe();
  }

}
