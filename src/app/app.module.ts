import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { ScoreBasketApp } from './app.component';
import { CoursesTab } from '../pages/courses-tab/courses-tab';
import { PlayersTab } from '../pages/players-tab/players-tab';
import { HomeTab } from '../pages/home-tab/home-tab';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CourseCard} from "../components/course-card/course-card";
import {PlayerCard} from "../components/player-card/player-card";
import {ProfilePage} from "../pages/profile/profile";
import {GameCard} from "../components/game-card/game-card";

@NgModule({
  declarations: [
    ScoreBasketApp,
    CoursesTab,
    PlayersTab,
    HomeTab,
    TabsPage,
    CourseCard,
    PlayerCard,
    ProfilePage,
    GameCard
  ],
  imports: [
    IonicModule.forRoot(ScoreBasketApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ScoreBasketApp,
    CoursesTab,
    PlayersTab,
    HomeTab,
    TabsPage,
    CourseCard,
    PlayerCard,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
