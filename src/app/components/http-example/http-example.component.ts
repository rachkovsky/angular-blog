import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-http-example',
  templateUrl: './http-example.component.html',
  styleUrls: ['./http-example.component.scss']
})
export class HttpExampleComponent implements OnInit {

  dataFromServer: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.post('/api/test', {}).subscribe((data) => {
      this.dataFromServer = data;
      console.log(data);
    });

  }

}
