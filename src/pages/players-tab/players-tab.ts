import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PlayerCard } from '../../components/player-card/player-card';

/*
  Generated class for the Players page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-players',
  templateUrl: 'players-tab.html'
})
export class PlayersTab {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayersTab');
  }

}