import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'user-enrollment';
  isLogin:boolean=false;
  constructor(private route: Router){
    document.addEventListener('login',()=>{
      this.isLogin = true;
    })
  }
  
  
  ngOnInit(): void {
      this.isLogin=sessionStorage.getItem('isLogin')==='true'? true :false;
  }

  logout(){
    sessionStorage.setItem('USERNAME','');
    sessionStorage.setItem('PASSWORD','');
    this.route.navigate(["/login"]);
    sessionStorage.setItem("isLogin",'false');
    this.isLogin = false;
  }
}
