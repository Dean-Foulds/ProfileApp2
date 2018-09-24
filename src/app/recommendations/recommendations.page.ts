import { Component, OnInit } from '@angular/core';
import { RecommendationsService } from '../recommendations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.page.html',
  styleUrls: ['./recommendations.page.scss'],
})
export class RecommendationsPage implements OnInit {

  data: any;

  constructor(private recommendationsService: RecommendationsService, private router: Router) { }

  ngOnInit() {
    this.recommendationsService
    .getData()
    .subscribe(data => {
    console.log(data);
    this.data = data;
    });
  }
    onGoToNewSinglePage(recommendation) {
      this.recommendationsService.currentRecommendation = recommendation;
      this.router.navigate(['/single-recommendation']);
    }
  }


