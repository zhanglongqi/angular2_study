import {Injectable} from '@angular/core';

@Injectable()
export class CourseService {

	getCourses(): string[] {
		return ['course 1', 'course 2', 'course 3'];
	}
}