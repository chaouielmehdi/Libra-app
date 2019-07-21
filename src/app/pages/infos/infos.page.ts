import { Component, OnInit } from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.page.html',
  styleUrls: ['./infos.page.scss'],
})
export class InfosPage implements OnInit {

	cards: number[] = [1, 2, 3, 4, 5, 6, 7];
	isCardHidden: boolean = true;
	isCardClicked: boolean = false;
	areCardsHidden: boolean = false;

	ngOnInit() {
		this.showCards();
	}

	cardClicked(card){
		if(!this.isCardClicked){
			// to prevent user from double click
			this.isCardClicked = true;
			setTimeout(() => {
				this.isCardClicked = false;
			}, 2000);

			// hide all cards
			this.hideCards();
	
			// show one card
			this.showCard();
			
			// hide menu button
			this.hideMenuBtn();
	
			// show back button
			this.showBackBtn();
		}
	}

	backClicked(){
		// show all cards
		this.showCards();

		// hide one card
		this.hideCard();
		
		// show menu button
		this.showMenuBtn();

		// hide back button
		this.hideBackBtn();

		//this.scrollTo('cards-container');
	}

	scrollTo(id) {
		console.log(`scrolling to ${id} ------------------------------------`);
		let el = document.getElementById(id);
		el.scrollIntoView( {behavior:"smooth"} );
	}
	
    /*
    |--------------------------------------------------------------------------
    | cards animations
    |--------------------------------------------------------------------------
    |
    | The cards animations (show hide...) using anime.js
    |
    */
	showCards(){
		// show cards
		this.areCardsHidden = false;
		
		// animate cards
		setTimeout(() => {
			anime({
				targets: '.card',
				translateX: [5000, 0],
				delay: function(el, i, l) {
				  return i * 50;
				},
				duration: 1000,
				easing: 'easeOutCirc'
			});
		}, 0);
		
	}

	hideCards(){
		// hide cards
		setTimeout(() => {
			this.areCardsHidden = true;
		}, 1010);

		// animate cards
		anime({
			targets: '.card',
			translateX: [0, 5000],
			delay: function(el, i, l) {
				return i * 50;
			},
			duration: 1000,
			easing: 'easeInCirc'
		});
	}




	
	showCard(){
		this.isCardHidden = false;
		
		anime({
			targets: '.info-card-container',
			translateX: [-5000, 0],
			duration: 1000,
			easing: 'easeOutCirc'
		});

	}

	hideCard(){
		this.isCardHidden = false;
		
		anime({
			targets: '.info-card-container',
			translateX: [0,-5000],
			duration: 1000,
			easing: 'easeInCirc'
		});

	}





   /*
    |--------------------------------------------------------------------------
    | buttons animations
    |--------------------------------------------------------------------------
    |
    | The buttons animations (show hide...) using anime.js
    |
    */
	showMenuBtn(){
		anime({
			targets: 'ion-menu-button',
			translateX: [5000, 0],
			duration: 1000,
			easing: 'easeOutCirc'
		});
	}

	hideMenuBtn(){
		anime({
			targets: 'ion-menu-button',
			translateX: [0, 5000],
			duration: 1000,
			easing: 'easeInCirc'
		});
	}





	showBackBtn(){
		anime({
			targets: '.back-button',
			translateX: [5000,0],
			duration: 1000,
			easing: 'easeOutCirc'
		});
	}

	hideBackBtn(){
		anime({
			targets: '.back-button',
			translateX: [0, 5000],
			duration: 1000,
			easing: 'easeInCirc'
		});
	}

}
