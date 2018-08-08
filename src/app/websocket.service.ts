import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private host = 'http://localhost:5000';
  private socket: any;

  constructor() {
    this.socket = io(this.host);
    this.socket.on('connect', () => this.onConnect());
    this.socket.on('disconnect', () => this.onDisconnect());
  }

  onConnect() {
    this.socket.connect();
  }

  onDisconnect() {
    this.socket.disconnect();
  }

  // EMITTER
  sendMessage(msg: string) {
    this.socket.emit('sendMessage', {message: msg});
  }

  // HANDLER
  onNewMessage() {
    return Observable.create(observer => {
      this.socket.on('newMessage', msg => {
        observer.next(msg);
      });
    });
  }
}
