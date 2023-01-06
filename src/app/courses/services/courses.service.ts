import { Cource } from './../model/cource';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor( private httpCliente: HttpClient ) { }

  findAll() :Cource[]{
    return [
      {_id:'01', name:'Angular', category:'Front'}
    ]
  }
}
