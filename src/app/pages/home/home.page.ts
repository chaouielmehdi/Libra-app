import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as anime from 'animejs';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
	
	isHeaderHidden: boolean = false;
	areCardsHidden: boolean = false;
	isFirstOpen: boolean = true;

  	constructor(
		private router: Router
	) {}

	ngOnInit() {
		this.appFirstOpen();
	}

	appFirstOpen(){
		console.log('first open');

		// hide cards
		this.areCardsHidden = true;

		

		this.areCardsHidden = false;
		this.showCards();
	}

	cardClicked(page: string){
		// hide header temporarily
		this.isHeaderHidden = true;
		setTimeout(() => {
			this.isHeaderHidden = false;
		}, 1000);

		// navigate
		this.router.navigateByUrl('/'+page);
	}

	showCards(){
		// make cards visible
		this.areCardsHidden = false;

		// animate cards
		setTimeout(() => {
			anime({
				targets: '.right-card',
				translateX: [5000, 0],
				delay: function(el, i, l) {
				  return i * 50;
				},
				duration: 1000,
				easing: 'easeOutCirc'
			});
		}, 0);

		// animate cards
		setTimeout(() => {
			anime({
				targets: '.left-card',
				translateX: [-5000, 0],
				delay: function(el, i, l) {
				  return i * 50;
				},
				duration: 1000,
				easing: 'easeOutCirc'
			});
		}, 0);
	}
}