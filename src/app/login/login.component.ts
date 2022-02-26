import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login = {
    name:'',
    password:''
  }

  constructor(private router:Router,private snackbar:MatSnackBar) { }

  ngOnInit() {
  }
 onLoginSubmit(login: any){
   let userName= sessionStorage.getItem('USERNAME');
   let password= sessionStorage.getItem('PASSWORD');
   if(login.name===userName && login.password===password){
     this.router.navigate(["/dashboard"]);
     sessionStorage.setItem('isLogin','true');
     let loginEvent = new Event('login');
     document.dispatchEvent(loginEvent);
   }
   else{
     this.snackbar.open('Invalid User','Cancel',{duration:2000,verticalPosition:'top'});
   }
 }
}
