import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';


const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  }, 
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'marketplace',
    component: MarketplaceComponent
  },
  {
    path: 'albums',
    component: AlbumDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
