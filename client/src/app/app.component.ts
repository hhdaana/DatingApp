import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({ //decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    })
  }
}
