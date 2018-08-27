import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-load-content',
  templateUrl: './load-content.component.html',
  styleUrls: ['./load-content.component.scss']
})
export class LoadContentComponent implements OnInit {

  private statusContent = false;
  public content = 'content load status';
  private contentStates = {
    'ready': 'content is ready to uploading',
    'notready': 'content is not ready',
    'inprocess': 'loading in process',
    'done': 'loading complete'
  };
  public btnStatus = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    if (this.showStatus()) {
      this.content = this.contentStates.ready;
      this.btnStatus = true;
    } else {
      this.content = this.contentStates.notready;
    }
  }

  getStatus() {
    return this.http.get(environment.apiUrl + 'contentLoader/status');
  }

  showStatus() {
    this.getStatus().subscribe(
      (response: any) => {
        this.statusContent = response;
        console.log(this.statusContent);
      },
      (error: any) => console.warn(error)
    );
  }

  loadContent() {
    this.http.post(environment.apiUrl + 'contentLoader/load', true);
  }

}
