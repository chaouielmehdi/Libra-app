import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
	{ path: 'infos', loadChildren: './pages/infos/infos.module#InfosPageModule' },
	{ path: 'news', loadChildren: './pages/news/news.module#NewsPageModule' },
	{ path: 'stats', loadChildren: './pages/stats/stats.module#StatsPageModule' }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
