import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-speakerDetail',
  templateUrl: 'speakerDetail.html'
})
export class SpeakerDetailPage {

  private speaker = {};

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.speaker = navParams.get("speaker");
  }

}
