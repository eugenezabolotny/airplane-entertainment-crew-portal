import {Component, OnInit} from '@angular/core';
import {DEVICES_STATUS} from '../../data/mock-data/devices-status';

@Component({
  selector: 'app-devices-status',
  templateUrl: './devices-status.component.html',
  styleUrls: ['./devices-status.component.scss']
})
export class DevicesStatusComponent implements OnInit {

  devicesStatus = DEVICES_STATUS;

  constructor() {
  }

  ngOnInit() {
  }

}
