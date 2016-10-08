import {Component} from '@angular/core';
import {CourseService} from './course.service'

@Component({
	selector: "my-courses",
	template: `<h2>{{title}}</h2>
						{{author}}
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
	author: string;
	socket;

	constructor(private courseService: CourseService) {

		this.courses = this.courseService.getCourses();

		this.socket = new WebSocket('ws://localhost:8888/bic/con');
		this.socket.onmessage = function (ev) {
			var data = JSON.parse(ev.data);
			this.author = data['name'];
			console.info(data);
		}
	}

}