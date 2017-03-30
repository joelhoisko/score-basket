import { Component } from '@angular/core';

import { CoursesPage } from '../courses/courses';
import { HomePage } from '../home/home';
import { PlayersPage } from '../players/players';
import {NavController} from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = CoursesPage;
  tab2Root: any = HomePage;
  tab3Root: any = PlayersPage;

  constructor() {

  }

}
