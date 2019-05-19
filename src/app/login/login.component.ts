import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login:FormGroup ;
  genders=['male','female'] ;
  constructor(private fb:FormBuilder , private router:Router) { }

  ngOnInit() {
    this.login=this.fb.group({
      username:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      secretMsg:['pet',Validators.required],
      gender:['male',Validators.required]
    })
  }

  loadHome()
  {
    this.router.navigate(['/home']) ;
  }

}
