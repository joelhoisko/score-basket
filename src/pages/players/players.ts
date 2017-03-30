import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PlayerListItemPage } from '../player-list-item/player-list-item';

/*
  Generated class for the Players page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-players',
  templateUrl: 'players.html'
})
export class PlayersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayersPage');
  }

}
