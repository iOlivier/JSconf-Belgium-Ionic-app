import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConferenceProvider } from '../../providers/conferenceProvider';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {

  private sessions = [];

  constructor(public navCtrl: NavController, private confProvider: ConferenceProvider) {
  }

  ionViewDidEnter() {
    this.sessions = this.confProvider.getSessions();
  }

  dividerNeededForSession(index) {
    if (index == 0) {
      return true;
    } else if (this.sessions[index].timeStart == this.sessions[index-1].timeStart) {
      return false;
    } else {
      return true;
    }
  }

  goToSessionDetail() {

  }

}
