import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { TimePipe } from './time.pipe';

import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleDetailPage } from '../pages/schedule/scheduleDetail';
import { MapPage } from '../pages/map/map';
import { SpeakersPage } from '../pages/speakers/speakers';
import { SpeakerDetailPage } from '../pages/speakers/speakerDetail';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ConferenceData } from '../providers/conferenceProvider';

@NgModule({
  declarations: [
    MyApp,
    SchedulePage,
    ScheduleDetailPage,
    MapPage,
    SpeakersPage,
    SpeakerDetailPage,
    TabsPage,
    TimePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
    ConferenceData,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
