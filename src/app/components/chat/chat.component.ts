import { Component } from '@angular/core';

import { client } from './../../api-ai/api-ai.client';
import { Message } from './../../models/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  messages: Message[] = [];

  addMessageFromUser(message) {
    this.messages.push({
      avatar: 'perm_identity',
      from: 'Me',
      content: message.value
    });

    client.textRequest(message.value).then((response) => {
      console.log('Response from Bot!', response);
      this.messages.push({
        avatar: 'android',
        from: 'Bot',
        content: response.result.fulfillment['speech'] || 'I can\'t seem to figure that out!'
      });
      message.value = '';
    });
  }

}
