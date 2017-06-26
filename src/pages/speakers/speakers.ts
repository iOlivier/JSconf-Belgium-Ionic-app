import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConferenceProvider } from '../../providers/conferenceProvider';


@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html'
})
export class SpeakersPage {

  private speakers = [];

  constructor(public navCtrl: NavController, private confProvider: ConferenceProvider) {
    this.speakers = confProvider.getSpeakers();
  }

}
