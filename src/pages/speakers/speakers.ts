import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConferenceProvider } from '../../providers/conferenceProvider';
import { SpeakerDetailPage } from './speakerDetail';


@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html'
})
export class SpeakersPage {

  private speakers = [];

  constructor(public navCtrl: NavController, private confProvider: ConferenceProvider) {
    this.speakers = confProvider.getSpeakers();
  }

  goToDetailPage(speaker) {
    this.navCtrl.push(SpeakerDetailPage, { speaker: speaker });
  }

}
