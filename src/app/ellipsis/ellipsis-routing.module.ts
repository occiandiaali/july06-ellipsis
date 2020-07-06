import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EllipsisPage } from './ellipsis.page';

const routes: Routes = [
  {
    path: 'ellipsis',
    component: EllipsisPage,
    children: [
      {
        path: 'discover',
        loadChildren: () => import('../discover/discover.module').then(m => m.DiscoverPageModule)
      },
      {
        path: 'news',
        loadChildren: () => import('../news/news.module').then(m => m.NewsPageModule)
      },
      {
        path: 'cryptos',
        loadChildren: () => import('../cryptos/cryptos.module').then(m => m.CryptosPageModule)
      },
      {
        path: '',
        redirectTo: '/ellipsis/discover',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/ellipsis/discover',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EllipsisPageRoutingModule {}
