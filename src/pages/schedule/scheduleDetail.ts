import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-scheduledetail',
  templateUrl: 'scheduleDetail.html'
})
export class ScheduleDetailPage {

  private session = {};

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.session = navParams.get("session");
  }

}
