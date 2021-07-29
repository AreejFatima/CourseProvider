import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/Course';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
 courseId:any;
 courses:Course[]=[];
 course1:any;

  constructor(private router:Router,private courseServive:CourseService,private activatedRouter:ActivatedRoute) {
   this.courseId= this.activatedRouter.snapshot.params["id"];
   this.courseServive.getCourses().subscribe((courses)=>this.courses=courses);
   this.course1=this.getCourseDescription();
   console.log(this.course1.title)
   }

  getCourseDescription():any{
  for (let i=0;i<this.courses.length;i++){
    if(this.courses[i].id==this.courseId){
      return this.courses[i];
    }
  }
}
  ngOnInit(): void {
  }

}
