import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.page.html',
  styleUrls: ['./infos.page.scss'],
})
export class InfosPage implements OnInit {

	cards: string[] = ['1', '2', '3', '4', '5', '6', '7'];

	ngOnInit() {
	}
}
