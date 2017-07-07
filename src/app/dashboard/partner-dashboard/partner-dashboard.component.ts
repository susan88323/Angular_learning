import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/mergeMap';

import { WikipediaSearchService } from '../../shared/wikipedia-search.service';

@Component({
  selector: 'app-partner-dashboard',
  templateUrl: './partner-dashboard.component.html',
  styleUrls: ['./partner-dashboard.component.css']
})
export class PartnerDashboardComponent implements OnInit {
	items: Array<string>;
	term = new Subject<string>();

  constructor(private searchService: WikipediaSearchService) {
  	this.term
  			.debounceTime(400)
  			.distinctUntilChanged()
  			.flatMap(term => this.searchService.search(term))
  			.subscribe(results => this.items = results);
  }

  ngOnInit() {
  }

  // search(term: string) {
  // 	this.searchService.search(term).subscribe(results => this.items = results);
  // 	console.log("search!!!");
  // }

}
