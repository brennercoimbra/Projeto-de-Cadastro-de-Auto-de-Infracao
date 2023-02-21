import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';

import { Ait } from './ait.model'
import { EMPTY, Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AitService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  baseUrl = "http://localhost:3001/aits"

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"]
    })
  }


  create(ait: Ait): Observable<Ait> {
    return this.http.post<Ait>(this.baseUrl, ait).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e)));
  }

  
  
  read(): Observable<Ait[]> {
    return this.http.get<Ait[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e)));
  }
  
  readById(id: string): Observable<Ait> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Ait>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e)));
  }
  
  update(ait: Ait): Observable<Ait> {
    const url = `${this.baseUrl}/${ait.id}`
    return this.http.put<Ait>(url, ait).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e)));
  }
  
  delete(id: number): Observable<Ait> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Ait>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e)));
  }
  
  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY
  }
  
  
}
