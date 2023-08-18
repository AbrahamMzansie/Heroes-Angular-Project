import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  constructor() {}

  add(messageText: string) {
    this.messages.push(messageText);
  }

  clear() {
    this.messages = [];
  }
}
