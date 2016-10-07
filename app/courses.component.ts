import {Component} from '@angular/core';
import {CourseService} from './course.service'

@Component({
	selector: "my-courses",
	template: `<h2>{{title}}</h2>
						<ul>
						<li *ngFor="let course of courses">
						<strong>{{ course }}</strong>
						</li>
						</ul>
`,
	providers: [CourseService]
})
export class CoursesComponent {
	title = 'Title of Course';
	courses = [];

	constructor(private courseService: CourseService) {

		this.courses = this.courseService.getCourses();
	}
}