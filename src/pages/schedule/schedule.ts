import { Component } from '@angular/core';
import { NavController, Refresher, ToastController } from 'ionic-angular';
import { ConferenceData } from '../../providers/conferenceProvider';
import { ScheduleDetailPage } from './scheduleDetail';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {

  private sessions = [];

  constructor(public navCtrl: NavController, private confData: ConferenceData, private toastCtrl: ToastController) {
    this.sessions = confData.getSessions();
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

  doRefresh(refresher: Refresher) {

    this.sessions = this.confData.getSessions();

    // simulate a network request that would take longer
    // than just pulling from out local json file
    setTimeout(() => {
      refresher.complete();

      const toast = this.toastCtrl.create({
        message: 'Sessions have been updated.',
        duration: 3000
      });
      toast.present();
    }, 1000);
  }

}