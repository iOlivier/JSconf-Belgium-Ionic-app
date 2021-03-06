import { Component } from '@angular/core';
import { NavController, Refresher, ToastController } from 'ionic-angular';
import { ConferenceData } from '../../providers/conferenceProvider';
import { SpeakerDetailPage } from './speakerDetail';


@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html'
})
export class SpeakersPage {

  private speakers = [];

  constructor(public navCtrl: NavController, private confData: ConferenceData, private toastCtrl: ToastController) {
    this.confData.getSpeakers(new Date().getFullYear()).then(sessions => this.speakers = sessions);
    setTimeout(() => console.log(this.speakers), 100);
  }

  goToDetailPage(speaker) {
    this.navCtrl.push(SpeakerDetailPage, { speaker: speaker });
  }

  doRefresh(refresher: Refresher) {

    this.confData.getSpeakers(new Date().getFullYear()).then(sessions => this.speakers = sessions);

    // simulate a network request that would take longer
    // than just pulling from out local json file
    setTimeout(() => {
      refresher.complete();

      const toast = this.toastCtrl.create({
        message: 'Speakers have been updated.',
        duration: 3000
      });
      toast.present();
    }, 1000);
  }
}
