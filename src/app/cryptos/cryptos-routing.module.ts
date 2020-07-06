import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptosPage } from './cryptos.page';

const routes: Routes = [
  {
    path: '',
    component: CryptosPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptosPageRoutingModule {}
