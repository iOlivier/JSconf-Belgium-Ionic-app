import { Component } from '@angular/core';

import { SchedulePage } from '../schedule/schedule';
import { MapPage } from '../map/map';
import { SpeakersPage } from '../speakers/speakers';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SchedulePage;
  tab2Root = SpeakersPage;
  tab3Root = MapPage;

  constructor() {

  }
}
