import { Component, OnInit } from '@angular/core';
import { RecommendationsService } from '../recommendations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-recommendation',
  templateUrl: './single-recommendation.page.html',
  styleUrls: ['./single-recommendation.page.scss'],
})
export class SingleRecommendationPage implements OnInit {

  recommendation;

  constructor(private recommendationService: RecommendationsService, private router: Router) { }

  ngOnInit() {
    this.recommendation = this.recommendationService.currentRecommendation;
    console.log(this.recommendationService.currentRecommendation);
  }


onGoToAllPage() {
  this.router.navigate(['/recommendations']);
}


}
