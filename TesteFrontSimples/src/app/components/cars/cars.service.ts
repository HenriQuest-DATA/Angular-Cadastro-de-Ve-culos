import { Cars } from './cars.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarsService {

  baseUrl = "http://localhost:3001/carros"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(car: Cars): Observable<Cars>{
    return this.http.post<Cars>(this.baseUrl, car);
  }

  read(index = 0, pageSize = 0): Observable<Cars[]>{
    if((index == 0) && (pageSize == 0))
      return this.http.get<Cars[]>(this.baseUrl);
    else
      return this.http.get<Cars[]>(this.baseUrl+'?_page='+index+'&_limit='+pageSize);
  }

  readById(id: string): Observable<Cars>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Cars>(url);
  }

  update(car: Cars): Observable<Cars>{
    const url = `${this.baseUrl}/${car.id}`;
    return this.http.put<Cars>(url, car);
  }

  delete(car: Cars): Observable<Cars>{
    const url = `${this.baseUrl}/${car.id}`;
    return this.http.delete<Cars>(url);
  }

}
