import {ChatService, Message} from './chat.service';
import {Component, ElementRef} from '@angular/core';
import {WebSocketService} from './websocket.service';

@Component({
    selector: 'chat',
    template: `
        <div class="messages">
            <p *ngFor="let msg of messages; let i = index; let last = last">
                {{i}}. {{ msg.author}}: {{ msg.message }}
                {{last}}
            </p>
        </div>
    `,
    providers: [ChatService, WebSocketService]
})
export class Chat {
    private messages: Message[] = new Array();

    constructor(private chatService: ChatService) {
        chatService.messages.subscribe(msg => {
            this.messages.push(msg);
        });
    }
}
