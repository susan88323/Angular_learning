import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer-list-item',
  templateUrl: './customer-list-item.component.html',
  styleUrls: ['./customer-list-item.component.css']
})
export class CustomerListItemComponent implements OnInit {
	@Input() customerName: string;

  constructor() { }

  ngOnInit() {
  }

}
