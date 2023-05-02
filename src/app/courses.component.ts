import { Component } from "@angular/core";
import {CoursesService} from "./courses.service";

@Component(
  {
    selector: 'courses',
    template: '<h2 *ngFor="let CurrData of this.newData.data"> {{CurrData.thumbnail}}</h2>'

  }
)
export class CoursesComponent {
  title = "List of courses"
  courses = ["course1", "course2", "course3", "course14"]

  newData: any;
  constructor(private _apiservice:CoursesService) {
  }

  ngOnInit() {
    this._apiservice.getData().subscribe(res => {
      this.newData = res
      console.log(this.newData.data)
    })
  }
}
