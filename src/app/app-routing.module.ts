import { AuthGuard } from './core/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [AuthGuard]  },
  { path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'details', loadChildren: './pages/todo-details/todo-details.module#TodoDetailsPageModule' },
  { path: 'details/:id', loadChildren: './pages/todo-details/todo-details.module#TodoDetailsPageModule' },
  { path: 'recommendations', loadChildren: './recommendations/recommendations.module#RecommendationsPageModule' },
  { path: 'single-recommendation', loadChildren: './single-recommendation/single-recommendation.module#SingleRecommendationPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
