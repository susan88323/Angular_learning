import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-site-list-item',
  templateUrl: './site-list-item.component.html',
  styleUrls: ['./site-list-item.component.css']
})
export class SiteListItemComponent implements OnInit {
	@Input() siteName: string;

  constructor() { }

  ngOnInit() {
  }

  edit() {
  	console.log("Edit");
  }

  delete() {
  	console.log("Delete");
  }

}
