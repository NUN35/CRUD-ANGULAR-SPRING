import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor( private httpClient : HttpClient) { }

  list(): Course[] {
    return [
      {_id: '1', name: 'Angular', category: 'Frontend'},
      {_id: '2', name: 'Angular2', category: 'Frontend'},
      {_id: '3', name: 'Angular4', category: 'Frontend'}
    ]
  }
}
