import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot({
      name: 'storage',
      storeName: 'storage',
      dbKey: 'storage',
      version: 1,
      driverOrder: ['indexeddb'],
    }),
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
