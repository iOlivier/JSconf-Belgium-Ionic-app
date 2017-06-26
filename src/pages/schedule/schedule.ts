import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConferenceProvider } from '../../providers/conferenceProvider';
import { ScheduleDetailPage } from './scheduleDetail';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {

  private sessions = [];

  constructor(public navCtrl: NavController, private confProvider: ConferenceProvider) {
    this.sessions = confProvider.getSessions();
  }

  dividerNeededForSession(index) {
    if (index == 0 || this.sessions[index].timeStart != this.sessions[index-1].timeStart) {
      return true;
    } else {
      return false;
    }
  }

  goToSessionDetail(session) {
    this.navCtrl.push(ScheduleDetailPage, { session: session });
  }

}
