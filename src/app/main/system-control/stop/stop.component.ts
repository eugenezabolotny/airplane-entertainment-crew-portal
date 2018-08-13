import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stop',
  templateUrl: './stop.component.html',
  styleUrls: ['./stop.component.scss']
})
export class StopComponent implements OnInit {
  @Input() isPlaying: boolean;

  constructor() { }

  ngOnInit() {
  }

}
