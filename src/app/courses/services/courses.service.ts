import { Cource } from './../model/cource';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, take, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/cursos.json'

  constructor( private httpCliente: HttpClient ) { }

  findAll() {
    return this.httpCliente.get<Cource[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap(courses => console.log(courses))
    );
  }
}
