import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor() { }

  loginForm!:FormGroup;
  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.loginForm=new FormGroup({
      username:new FormControl(''),
      password:new FormControl(''),
    })

  


}
  submitForm():void{
    console.log("HII");
  }
}

