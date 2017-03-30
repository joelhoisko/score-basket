import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CourseListItemPage } from '../course-list-item/course-list-item';

/*
  Generated class for the Courses page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html'
})
export class CoursesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursesPage');
  }

}
