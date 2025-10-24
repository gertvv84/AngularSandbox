import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-api-post',
  imports: [FormsModule],
  templateUrl: './test-api-post.html',
  styleUrl: './test-api-post.css'
})
export class TestApiPost implements OnInit {
  http = inject(HttpClient);

  //See https://freeprojectapi.com/api.html
  userObj: any = {
    "userId": 0,
    "emailId": "",
    "password": "",
    "fullName": "",
    "mobileNo": ""
  };

  usersList = signal<any[]>([]);

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((res:any)=>{
      this.usersList.set(res);
    });

  }

  createUser() {
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register",this.userObj).subscribe({
      next: (res:any) => {alert("User created"); this.getUsers();},
      error: (err: any) => {alert("Error creating user")},
      complete: () => {alert("Request completed")}
    })
  }

  reset(){

  }

}
