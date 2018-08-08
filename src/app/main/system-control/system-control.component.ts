import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../websocket.service';

@Component({
  selector: 'app-system-control',
  templateUrl: './system-control.component.html',
  styleUrls: ['./system-control.component.scss']
})
export class SystemControlComponent implements OnInit {
  msgInput = 'lorem ipsum';

  constructor(private websocketService: WebsocketService) {}

  ngOnInit() {
    this.websocketService.onNewMessage().subscribe(msg => {
      console.log('got a msg: ' + msg);
    });
  }

  sendMsg() {
    this.websocketService.sendMessage(this.msgInput);
  }

}
