import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  register= {
    name:'',
    email:'',
    password:'',
    cpassword:''
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onRegistrationSubmit(register : any){
  sessionStorage.setItem('USERNAME',register.email);
  sessionStorage.setItem('PASSWORD',register.password);
  this.router.navigate(["/dashboard"]);
  sessionStorage.setItem('isLogin','true');
  let loginEvent = new Event('login');
  document.dispatchEvent(loginEvent);
}
}
