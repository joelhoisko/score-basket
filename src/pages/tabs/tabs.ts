import { Component } from '@angular/core';

import { CoursesTab } from '../courses-tab/courses-tab';
import { HomeTab } from '../home-tab/home-tab';
import { PlayersTab } from '../players-tab/players-tab';
import {NavController} from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = CoursesTab;
  tab2Root: any = HomeTab;
  tab3Root: any = PlayersTab;

  constructor() {

  }

}
