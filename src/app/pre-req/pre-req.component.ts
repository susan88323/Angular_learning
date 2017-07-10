import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-req',
  templateUrl: './pre-req.component.html',
  styleUrls: ['./pre-req.component.css']
})
export class PreReqComponent implements OnInit {
	items: string[] = [
		"PBX is configured and phones are deployed",
		"Users are programmed with names and email addresses",
		"PBX and SIP capacity planning completed",
		"SIP capacity planning completed",
		"SIP trunk licences applied and SIP trunk to cloud configured and enabled",
		"OAI licence applied and CTI enabled",
		"OAI username and password configured"
	];

  constructor() { }

  ngOnInit() {
  }

}
