import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
	public appPages = [
		{
			title: 'الرئيسية',
			url: '/home',
			icon: 'home'
		},
		{
			title: 'معلومات',
			url: '/infos',
			icon: 'information-circle'
		},
		{
			title: 'مستجدات',
			url: '/news',
			icon: 'paper'
		},
		{
			title: 'إحصائيات',
			url: '/stats',
			icon: 'stats'
		}
	];
	
	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar,
		private router: Router
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
  	}
}
