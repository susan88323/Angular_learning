import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-system-update-error',
  templateUrl: './system-update-error.component.html',
  styleUrls: ['./system-update-error.component.css'],
  // host : {
  //       '[style.background-color]' : "'red'"
  //   },
  encapsulation: ViewEncapsulation.None,
})
export class SystemUpdateErrorComponent implements OnInit {
	errorDescription: string = "default error message";

  constructor() { }

  ngOnInit() {
  }

  onRetry() {
  	console.log("On Retry");
  }

  onFactoryReset() {
  	console.log("On Factory Reset");
  }

}
