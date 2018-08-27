import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private host = 'http://localhost:5000';
  // private host = 'http://192.168.52.10:5000';
  private socket: any;

  // TODO: uncomment all above for socket
  constructor() {
    // this.socket = io(this.host);
    // this.socket.on('connect', () => this.onConnect());
    // this.socket.on('disconnect', () => this.onDisconnect());
  }

  onConnect() {
    // this.socket.connect();
  }

  onDisconnect() {
    // this.socket.disconnect();
  }

  // EMITTER
  sendMessage(msg: string) {
    // this.socket.emit('message', msg);
  }

  // HANDLER
  onNewMessage() {
    // return Observable.create(observer => {
    //   this.socket.on('crew', msg => {
    //     observer.next(msg);
    //   });
    // });
  }
}
