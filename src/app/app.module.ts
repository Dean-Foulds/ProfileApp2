import { HttpClientModule } from '@angular/common/http';
import { RecommendationsPage } from './recommendations/recommendations.page';
import { AuthService } from './core/auth.service';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SingleRecommendationPage } from './single-recommendation/single-recommendation.page';


@NgModule({
  declarations: [AppComponent, UserProfileComponent],
  entryComponents: [],

  imports: [HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule],
  providers: [
    StatusBar,
    SplashScreen,
    CoreModule,
    AuthService,
    RecommendationsPage,
    SingleRecommendationPage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
