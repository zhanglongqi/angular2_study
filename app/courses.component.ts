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
						<div class="input-group col-xs-8">
						You just clicked/moved over <input type="text" [(ngModel)]="overItem">
						</div>
						<br>
						
						<div class="input-group col-xs-8">
                <input #newItem required type="text" class="form-control"
                    placeholder="new course...">
                <span class="input-group-btn">
                    <button class="btn btn-secondary"
                        (click)="onAddItem(newItem)">Add</button>
                </span>
            </div>
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

	onAddItem(listItem) {
		if (listItem.value == '') return;
		this.courses.push(listItem.value);
		listItem.value = '';
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