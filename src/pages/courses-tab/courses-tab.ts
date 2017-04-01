import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CourseCard } from '../../components/course-card/course-card';

/*
  Generated class for the Courses page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-courses',
  templateUrl: 'courses-tab.html'
})
export class CoursesTab {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursesTab');
  }

}