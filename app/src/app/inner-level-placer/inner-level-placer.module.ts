import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InnerLevelPlacerPage } from './inner-level-placer.page';

const routes: Routes = [
  {
    path: '',
    component: InnerLevelPlacerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InnerLevelPlacerPage]
})
export class InnerLevelPlacerPageModule {}
