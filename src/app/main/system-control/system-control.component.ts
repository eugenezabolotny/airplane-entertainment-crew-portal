import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../socket.service';
import { el } from '../../../../node_modules/@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-system-control',
  templateUrl: './system-control.component.html',
  styleUrls: ['./system-control.component.scss']
})
export class SystemControlComponent implements OnInit {
  public playNow: string;
  public duration: number;
  public timer = '00:00:00';
  private interval: any;

  constructor(private socketService: SocketService) {}

  ngOnInit() {
    // TODO: uncomment for socket
    // this.socketService.onNewMessage().subscribe(msg => {
    //   if (msg) {
    //     this.playNow = msg.name;
    //     this.duration = msg.duration;
    //     this.onPlay(this.duration);
    //   }
    // });
  }

  sendMsg(msg) {
    clearInterval(this.interval);
    if (msg !== this.playNow) {
      this.socketService.sendMessage(msg);
    } else {
      this.socketService.sendMessage('stop');
      this.playNow = '';
    }
  }

  onPlay(msg: number) {
    let seconds = msg;

    this.interval = setInterval(() => {
      this.countDown(seconds);
      seconds--;
      if (seconds === -1) {
        clearInterval(this.interval);
        this.timer = '00:00:00';
        this.playNow = '';
      }
    }, 1000);
  }

  private countDown(sec: number) {
    let h: any = Math.floor(sec / 3600);
    h = h >= 10 ? h : '0' + h;
    sec -= h * 3600;

    let m: any = Math.floor(sec / 60);
    m = m >= 10 ? m : '0' + m;
    sec -= m * 60;

    const s = sec >= 10 ? sec : '0' + sec;
    this.timer = `-${h}:${m}:${s}`;
  }

}
