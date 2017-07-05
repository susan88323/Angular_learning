import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  partnerLogin() {
  	console.log("partner login");
  	this.router.navigate(['partner-login'], {relativeTo: this.route});
  }

  customerLogin() {
  	console.log("customer login");
  	this.router.navigate(['customer-login'], {relativeTo: this.route});
  }
}
