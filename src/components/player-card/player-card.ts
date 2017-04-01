import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProfilePage } from "../../pages/profile/profile";

/*
  Generated class for the PlayerListItem page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'player-card',
  templateUrl: 'player-card.html'
})
export class PlayerCard {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayerCard');
  }

  openProfile() {
    this.navCtrl.push(ProfilePage);
  }

}
