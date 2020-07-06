import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EllipsisPageRoutingModule } from './ellipsis-routing.module';

import { EllipsisPage } from './ellipsis.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    EllipsisPageRoutingModule
  ],
  declarations: [EllipsisPage]
})
export class EllipsisPageModule {}
