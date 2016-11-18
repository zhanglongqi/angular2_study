import {Component} from '@angular/core';
import {CourseService} from './course.service'

@Component({
	selector: "my-courses",
	template: `<h2>{{title}}</h2>
						{{author}}
						<ul>
							<li *ngFor="let course of courses" (mouseover)="itemHovered(course)">
								<strong>{{ course }}</strong>
							</li>
						</ul>
						You just moved over <input type="text" [(ngModel)]="overItem">
`,
	providers: [CourseService]
})
export class CoursesComponent {
	title = 'Title of Course';
	courses = [];
	author: string;
	socket;
	public overItem = '';

	itemHovered(course) {
		this.overItem = course;
	}

	constructor(private courseService: CourseService) {

		this.courses = this.courseService.getCourses();

		this.socket = new WebSocket('ws://localhost:8080/bic/con');
		this.socket.onmessage = function (ev) {
			var data = JSON.parse(ev.data);
			this.author = data['name'];
			console.info(data);
		}
	}

}