import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {ProfilePage} from "../profile/profile";

/*
  Generated class for the PlayerListItem page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'player-list-item',
  templateUrl: 'player-list-item.html'
})
export class PlayerListItemPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayerListItemPage');
  }

  openProfile() {
    this.navCtrl.push(ProfilePage);
  }

}
