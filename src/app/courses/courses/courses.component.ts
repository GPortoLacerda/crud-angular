import { Component, OnInit } from '@angular/core';

import { Cource } from '../model/cource';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{

  courses: Cource[] = []
  displayedColumns = ['name', 'category']

  constructor(private coursesService: CoursesService){}

  ngOnInit(): void{
    this.courses = this.coursesService.findAll()
  }

}
