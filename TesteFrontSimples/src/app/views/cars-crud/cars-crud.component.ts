import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cars-crud',
  templateUrl: './cars-crud.component.html',
  styleUrls: ['./cars-crud.component.css']
})
export class CarsCrudComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToCarCreate(): void {
    this.router.navigate(['/adicionar']);
  }

}
