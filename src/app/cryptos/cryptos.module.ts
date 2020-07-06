import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CryptosPage } from './cryptos.page';

import { CryptosPageRoutingModule } from './cryptos-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: CryptosPage }]),
    CryptosPageRoutingModule,
  ],
  declarations: [CryptosPage]
})
export class CryptosPageModule {}
