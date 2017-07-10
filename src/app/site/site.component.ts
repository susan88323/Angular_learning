import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
	siteForm: FormGroup;
	editMode: boolean = false;
	id: number;

  constructor(private route: ActivatedRoute,
  						private router: Router) { }

  ngOnInit() {
  	this.route.params
  		.subscribe(
  			(params: Params) => {
  				this.id = +params['id'];
  				this.editMode = params['id'] != null;
  				this.initForm();
  			}
  		);
  }

  onSubmit() {
  	// TODO
  }

  goBack() {
  	// TODO
  }

  private initForm() {
  	let name = '';
  	let addressLine1 = '';
  	let addressLine2 = '';
  	let city = '';
  	let province = '';
  	let postal = '';
  	let country = '';
  	let inboundDigits = '';
  	let outboundDigits = '';

  	if (this.editMode) {
  		// TODO: Fill the form
  	}

  	this.siteForm = new FormGroup({
  		'name': new FormControl(name, Validators.required),
  		'addressLine1': new FormControl(addressLine1, Validators.required),
  		'addressLine2': new FormControl(addressLine2, Validators.required),
  		'city': new FormControl(city, Validators.required),
  		'province': new FormControl(province, Validators.required),
  		'postal': new FormControl(postal, Validators.required),
  		'country': new FormControl(country, Validators.required),
  		'inboundDigits': new FormControl(inboundDigits, Validators.required),
  		'outboundDigits': new FormControl(outboundDigits, Validators.required)
  	});
  }	

}
