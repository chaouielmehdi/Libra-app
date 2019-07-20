import { Component, OnInit } from '@angular/core';
import * as anime from 'animejs';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  	constructor() {}

	ngOnInit() {
	}

	animateToLeft(){
		console.log('run the animation');
		
		anime({
			targets: '.square',
			translateX: -250
		});
	}
	animateToRight(){
		console.log('run the animation');
		
		anime({
			targets: '.square',
			translateX: 0
		});
	}

}
