import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-load-content',
  templateUrl: './load-content.component.html',
  styleUrls: ['./load-content.component.scss']
})
export class LoadContentComponent implements OnInit {

  public content = 'content load status';
  public btnStatus = false;
  private contentStates = {
    'notready': 'content is not ready',
    'ready': 'content is ready to uploading',
    'inprocess': 'loading in process',
    'done': 'loading complete'
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.showIsReadyStatus();
  }

  getStatus() {
    return this.http.get(environment.apiUrl + 'contentLoader/status');
  }

  getContent() {
    return this.http.get(environment.apiUrl + 'contentLoader/load');
  }

  showIsReadyStatus() {
    this.getStatus().subscribe(
      (response: any) => {
        if (response['status']) {
          this.content = this.contentStates.ready;
          this.btnStatus = true;
        } else {
          this.content = this.contentStates.notready;
        }
      },
      (error: any) => console.warn(error)
    );
  }

  loadContent() {
    this.content = this.contentStates.inprocess;
    this.getContent().subscribe(
      (response: any) => {
        if (response['status']) {
          this.content = this.contentStates.done;
        }
      },
      (error: any) => console.warn(error)
    );
  }

}
