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
    this.confData.getSessions(new Date().getFullYear()).then(sessions => this.sessions = sessions);
  }

  dividerNeededForSession(index): Boolean {
    return (index == 0 || this.sessions[index].from != this.sessions[index-1].from);
  }

  goToSessionDetail(session) {
    this.navCtrl.push(ScheduleDetailPage, { session: session });
  }

  doRefresh(refresher: Refresher) {

    this.confData.getSessions(new Date().getFullYear()).then(sessions => {

      this.sessions = sessions;

      refresher.complete();

      const toast = this.toastCtrl.create({
        message: 'Sessions have been updated.',
        duration: 3000
      });
      toast.present();
    });
  }

}