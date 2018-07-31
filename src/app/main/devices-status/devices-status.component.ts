import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';


@Component({
  selector: 'app-devices-status',
  templateUrl: './devices-status.component.html',
  styleUrls: ['./devices-status.component.scss']
})
export class DevicesStatusComponent implements OnInit {

  private statusData: any;
  private cols: any[];

  constructor(private http: HttpClient) {
    this.showData();
  }

  ngOnInit() {
    this.cols = [
      {field: 'platform',         header: 'platform',         width: '150'},
      {field: 'launchDate',       header: 'launchDate',       width: '300'},
      {field: 'deviceId',         header: 'deviceId',         width: '350'},
      {field: 'ssid',             header: 'ssid',             width: '150'},
      {field: 'accessPointMAC',   header: 'accessPointMAC',   width: '200'},
      {field: 'rssi',             header: 'rssi',             width: '150'},
      {field: 'ip',               header: 'ip',               width: '250'},
      {field: 'dataReceived',     header: 'dataReceived',     width: '150'},
      {field: 'dataSent',         header: 'dataSent',         width: '150'},
      {field: 'connectionSpeed',  header: 'connectionSpeed',  width: '170'},
      {field: 'serverPing',       header: 'serverPing',       width: '150'},
      {field: 'controlServerURL', header: 'controlServerURL', width: '400'},
    ];
  }

  getData(hours) {
    return this.http.get(environment.serverUrl + 'device/' + hours);
  }

  showData(hours = 2) {
    this.getData(hours).subscribe(
      (response: any) => {
        this.statusData = response;
      },
      (error: any) => console.warn(error)
    );
  }

  select(e) {
    const hours = +e.target.value;
    this.showData(hours);
  }
}
