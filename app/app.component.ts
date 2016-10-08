import {Component} from '@angular/core';
import {ChatService} from './chat.service'
import {WebSocketService} from './websocket.service'
@Component({
	selector: 'my-app',
	template: '<h1>My First Angular App. Something different is here.</h1> ' +
	'<my-courses></my-courses>' +
	'<chat></chat>',
})
export class AppComponent {
}
