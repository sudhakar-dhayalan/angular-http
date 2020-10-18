import {Component} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data;

  constructor(private http: HttpClient) {
    let params = new HttpParams().set('id', '6');

    //Method 1 : Using pipe and async in html template (Angular way)
    //this.data = this.http.get('https://jsonplaceholder.typicode.com/posts');

    //Method 2 : Using subscribe (Typescript or JavaScript way)
    this.http
      .get('https://jsonplaceholder.typicode.com/posts', {params})
      .subscribe((value: any) =>
        this.data = value
      );

    console.log(this.http.get('https://jsonplaceholder.typicode.com/posts'));//http returns Observable
  }

  title = 'angular-http';
}
