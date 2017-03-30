import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { ScoreBasketApp } from './app.component';
import { CoursesPage } from '../pages/courses/courses';
import { PlayersPage } from '../pages/players/players';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CourseListItemPage} from "../pages/course-list-item/course-list-item";
import {PlayerListItemPage} from "../pages/player-list-item/player-list-item";
import {ProfilePage} from "../pages/profile/profile";

@NgModule({
  declarations: [
    ScoreBasketApp,
    CoursesPage,
    PlayersPage,
    HomePage,
    TabsPage,
    CourseListItemPage,
    PlayerListItemPage,
    ProfilePage
  ],
  imports: [
    IonicModule.forRoot(ScoreBasketApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ScoreBasketApp,
    CoursesPage,
    PlayersPage,
    HomePage,
    TabsPage,
    CourseListItemPage,
    PlayerListItemPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
