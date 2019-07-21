import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-news',
	templateUrl: './news.page.html',
	styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	doRefresh(event){
		console.log(event);
		setTimeout(() => {
		  console.log('Async operation has ended');
		  event.target.complete();
		}, 2000);
	}

}
