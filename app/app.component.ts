import {Component} from '@angular/core';

@Component({
	selector: 'my-app',
	template: '<h1>My First Angular App. Something different is here.</h1> ' +
	'<my-courses></my-courses>' + '<hr>' +
	'<chat></chat>' +
	'<create-message></create-message>'
})
export class AppComponent {
}
