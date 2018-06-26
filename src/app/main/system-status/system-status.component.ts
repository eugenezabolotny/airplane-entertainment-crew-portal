import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-system-status',
  templateUrl: './system-status.component.html',
  styleUrls: ['./system-status.component.scss']
})
export class SystemStatusComponent implements OnInit {

  systemStatusData = {
    'System Server Software Revision': '0.1.0',
    'CWAP FWD IAP-225-FW System Firmware Revision': 'Version 6.4.2.6-4.1.1.10',
    'CWAP MID IAP-225-FW System Firmware Revision': 'Version 6.4.2.6-4.1.1.10',
    'CWAP AFT IAP-225-FW System Firmware Revision': 'Version 6.4.2.6-4.1.1.10',
    'Content Loader System Firmware Revision': 'B',
    'Server OS Revision': '4.4.0-62-generic',
    'API Revision': '12',
    'Hardware Revision': '0',
    'STC Media Version': 'A',
    'Download Date': '08/17/2017',
  };

  constructor() {
  }

  ngOnInit() {
  }

}
