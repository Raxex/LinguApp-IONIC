import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExFoneticTranscriptPage } from './ex-fonetic-transcript.page';

const routes: Routes = [
  {
    path: '',
    component: ExFoneticTranscriptPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExFoneticTranscriptPage]
})
export class ExFoneticTranscriptPageModule {}
