import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DEVICES_STATUS} from '../../data/mock-data/devices-status';
import {environment} from '../../../environments/environment';


@Component({
  selector: 'app-devices-status',
  templateUrl: './devices-status.component.html',
  styleUrls: ['./devices-status.component.scss']
})
export class DevicesStatusComponent implements OnInit {

  private devicesStatus = DEVICES_STATUS;
  private statusData: any;

  constructor(private http: HttpClient) {
    this.showData();
  }

  ngOnInit() {
  }

  getData() {
    return this.http.get(environment.serverUrl + 'device');
  }

  showData() {
    console.log(this.getData());
    this.getData().subscribe(
      (response: any) => {
        this.statusData = response;
        console.log(this.statusData);
      },
      (error: any) => console.warn(error)
    );
  }
}
