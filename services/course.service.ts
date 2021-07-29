import { Injectable } from '@angular/core';
import { Course } from './../Course';
import { COURSES } from './../mock-courses';
import  {Observable,of} from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
   courses2:Course[]=[];
  constructor() { }
  getCourses():Observable<Course[]> {
    const courses=of(COURSES);
    return courses;
  }
  
}

