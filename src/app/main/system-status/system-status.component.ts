import {Component, OnInit} from '@angular/core';
import {SYSTEM_STATUS} from '../../data/mock-data/system-status';

@Component({
  selector: 'app-system-status',
  templateUrl: './system-status.component.html',
  styleUrls: ['./system-status.component.scss']
})
export class SystemStatusComponent implements OnInit {

  systemStatus = SYSTEM_STATUS;

  constructor() {
  }

  ngOnInit() {
  }

}
