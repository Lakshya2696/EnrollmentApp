import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userList: any = [];
  constructor() {
    this.userList = JSON.parse(sessionStorage.getItem('list'));
   }

  ngOnInit() {
  }

  onDelete(id){
    for(let i in this.userList){
      if(this.userList[i].email == id){
        this.userList.splice(i,1);
      }
    }
    sessionStorage.setItem('list',JSON.stringify(this.userList));
  }

}
