import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../socket.service';

@Component({
  selector: 'app-system-control',
  templateUrl: './system-control.component.html',
  styleUrls: ['./system-control.component.scss']
})
export class SystemControlComponent implements OnInit {
  msgInput = 'play';

  constructor(private socketService: SocketService) {}

  ngOnInit() {
    this.socketService.onNewMessage().subscribe(msg => {
      console.log('got a msg: ' + msg);
    });
  }

  sendMsg() {
    this.socketService.sendMessage(this.msgInput);
  }

}
