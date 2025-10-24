import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-test-api',
  imports: [],
  templateUrl: './test-api.html',
  styleUrl: './test-api.css'
})
export class TestApi implements OnInit{

  http = inject(HttpClient);
  cdr = inject(ChangeDetectorRef);
  userList: any[] = [];
  todoList = signal<any[]>([]);
  busUserList = signal<any[]>([]);


  ngOnInit(): void {
    this.getUsers();
    this.getTodoList();
    this.getAllBusBookingUsers();
  }

  // Forceren detect changes
  getUsers() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any) => {
      this.userList = result;
      this.cdr.detectChanges();
    })
  }

  // Via Signal
  getTodoList() {
      this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe((result:any) => {
      this.todoList.set(result);
    })
  }

  getAllBusBookingUsers() {
    this.http.get("https://api.freeprojectapi.com/api/BusBooking/GetAllUsers").subscribe((res: any) => {
      this.busUserList.set(res.data);
      console.log(res.data);
    })
  }

}
