import {Component, OnInit} from '@angular/core';
import {MODEM_STATUS} from '../../data/mock-data/modem-status';

@Component({
  selector: 'app-modem-status',
  templateUrl: './modem-status.component.html',
  styleUrls: ['./modem-status.component.scss']
})
export class ModemStatusComponent implements OnInit {

  modemStatus = MODEM_STATUS;

  constructor() {
  }

  ngOnInit() {
  }

}
