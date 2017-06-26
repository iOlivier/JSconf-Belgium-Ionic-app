import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {

  private sessions = {};

  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter() {
    console.log("I'm here");
  }

  dividerNeededForSession(index) {

  }

  goToSessionDetail() {

  }

}
