import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {
	socket;
	getCourses(): string[] {
		return ['course 1', 'course 2', 'course 3'];
	}
	constructor(){
		this.socket = new WebSocket('ws://localhost:8888/bic/con');
		this.socket.onmessage()
	}
}