import { Component } from '@angular/core';

import { SchedulePage } from '../schedule/schedule';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SchedulePage;
  tab2Root = HomePage;
  tab3Root = ContactPage;

  constructor() {

  }
}
