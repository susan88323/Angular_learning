import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LaunchService } from '../launch.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private launchService: LaunchService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
  	const username = form.value.username;
  	const password = form.value.password;
  	this.launchService.signinUser(username, password);
  }

}
