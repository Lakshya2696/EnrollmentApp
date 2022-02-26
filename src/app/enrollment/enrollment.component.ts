import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.scss']
})
export class EnrollmentComponent implements OnInit {
  userList:any = [];
  id: string;
  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phoneNumber:new FormControl(''),
    city:new FormControl('')
  });
  constructor(private route:ActivatedRoute, private router:Router) {
     let list = JSON.parse(sessionStorage.getItem('list'));
     if(list && list.length > 0){
       this.userList = list;
     }
   }
  

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    if(this.id){
      let tempArr = this.userList.filter((e)=>{
        return e.email == this.id;
      })
      this.userForm.patchValue(tempArr[0])
    }
   

  }
  onSubmit(userForm){
    if(this.id){
      for(let i in this.userList){
        if(this.userList[i].email == this.id){
          this.userList[i] = this.userForm.value
        }
      }
    }
    else{
      this.userList.push(this.userForm.value);
    }
    sessionStorage.setItem('list',JSON.stringify(this.userList));
    this.router.navigate(['/dashboard/user-list']);
  }

}
