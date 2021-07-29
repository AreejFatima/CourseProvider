import { CourseService } from './../../services/course.service';
import { Course } from './../../Course';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  topics:string='';
  levels:string='';
  ratings:string='';
  languages:string='';
  courses:Course[]=[];
  copycourses:Course[]=[];
   arr : any = [];

  constructor(private router:Router,private courseServive:CourseService,private activatedRoute:ActivatedRoute) { 
    
  }
 
  ngOnInit(): void {
    this.courseServive.getCourses().subscribe((courses)=>this.courses=courses);
    this.courseServive.getCourses().subscribe((copycourses)=>this.copycourses=copycourses);
  }
  showCourseDescription(id: number): void {
    this.router.navigate(['description', id]);
  }
  getTopicCourses(topic:string){
     this.arr=[];
      for (let i=0;i<this.copycourses.length;i++){
        
        if(this.copycourses[i].topic==topic){
          this.arr.push(this.copycourses[i]);
        }
        
  }
  this.courses=[];
  this.courses=this.arr;
  }
  expertise(level:string){
    this.arr=[];
     for (let i=0;i<this.copycourses.length;i++){
       
       if(this.copycourses[i].level==level){
         this.arr.push(this.copycourses[i]);
       }
       
 }
 this.courses=[];
 this.courses=this.arr;
 }
 language(lang:string){
  this.arr=[];
   for (let i=0;i<this.copycourses.length;i++){
     
     if(this.copycourses[i].language==lang){
       this.arr.push(this.copycourses[i]);
     }
     
}
this.courses=[];
this.courses=this.arr;
}
rating(score:string){
  this.arr=[];
   for (let i=0;i<this.copycourses.length;i++){
     
     if(this.copycourses[i].rating==score){
       this.arr.push(this.copycourses[i]);
     }
     
}
this.courses=[];
this.courses=this.arr;
}
}
