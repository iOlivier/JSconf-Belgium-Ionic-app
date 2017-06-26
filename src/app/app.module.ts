import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleDetailPage } from '../pages/schedule/scheduleDetail';
import { ContactPage } from '../pages/contact/contact';
import { SpeakersPage } from '../pages/speakers/speakers';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ConferenceProvider } from '../providers/conferenceProvider';

@NgModule({
  declarations: [
    MyApp,
    SchedulePage,
    ScheduleDetailPage,
    ContactPage,
    SpeakersPage,
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
    ContactPage,
    SpeakersPage,
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
