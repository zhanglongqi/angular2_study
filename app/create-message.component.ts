import {ChatService} from './chat.service'
import {Component} from '@angular/core';
import {WebSocketService} from "./websocket.service";

@Component({
	selector: 'create-message',
	template: `
        <form #sendMsg="ngForm" (ngSubmit)="onSubmit()">
            <div class="input-group col-xs-8">
                <input
                    [(ngModel)]="message.message"
                    name="name"
                    ngControl="msg"
                    required
                    type="text"
                    class="form-control"
                    placeholder="message...">
                <span class="input-group-btn">
                    <button
                        [disabled]="!sendMsg.form.valid"
                        class="btn btn-secondary"
                        type="submit">send</button>
                </span>
            </div>
        </form>
    `,
	providers: [ChatService, WebSocketService]
})

export class CreateMessage {
	private submitted = false;
	private message = {
		author: 'gogo',
		message: '',
	};

	constructor(private chatService: ChatService) {
	}

	private onSubmit() {
		this.chatService.messages.next(this.message);
		this.message.message = '';
	}
}
