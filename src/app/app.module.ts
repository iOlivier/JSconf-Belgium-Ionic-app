import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleDetailPage } from '../pages/schedule/scheduleDetail';
import { MapPage } from '../pages/map/map';
import { SpeakersPage } from '../pages/speakers/speakers';
import { SpeakerDetailPage } from '../pages/speakers/speakerDetail';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ConferenceProvider } from '../providers/conferenceProvider';

@NgModule({
  declarations: [
    MyApp,
    SchedulePage,
    ScheduleDetailPage,
    MapPage,
    SpeakersPage,
    SpeakerDetailPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SchedulePage,
    ScheduleDetailPage,
    MapPage,
    SpeakersPage,
    SpeakerDetailPage,
    TabsPage
  ],
  providers: [
    ConferenceProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
