import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SingleRecommendationPage } from './single-recommendation.page';

const routes: Routes = [
  {
    path: '',
    component: SingleRecommendationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SingleRecommendationPage]
})
export class SingleRecommendationPageModule {}
