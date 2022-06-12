import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: any;
  password: any;
  user = false;
  mistakes = 1;

  constructor() { }
  
  ngOnInit(): void {

    localStorage.setItem("123@gmail.com", "123456");
    localStorage.setItem("abc@yahoo.com", "password");
    localStorage.setItem("xyz@gmail.com", "456123");
    localStorage.setItem("player1@gmail.com", "alphabet");
    localStorage.setItem("google@gmail.com", "doogle");
  }

  emailId(event: any) {
    this.email = event.target.value;
  }

  passWord(event: any) {
    this.password = event.target.value;
  }

  login() {
    let password = localStorage.getItem(this.email);
    console.log(password);
  
    if(password) {
      this.user = true;
    }
    else {
      this.user = false;
      this.mistakes += 2;
    }
    this.mistakes -=1;
  }
  
  output(){
    if(this.mistakes == 1){
      alert('Confirm Details');
    }
    if(this.mistakes == 2){
      alert('Incorrect Details');
    }
  }
}
