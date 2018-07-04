import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ComponentsModule } from '../components/components.module';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Geolocation } from '@ionic-native/geolocation';
import { Sn1Page } from '../pages/sn1/sn1';
import { MainPage } from '../pages/main/main';
import { PopupPageModule } from '../pages/popup/popup.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Sn1Page,
    MainPage,
    Sn1Page

  ],
  imports: [
    BrowserModule,
    PopupPageModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Sn1Page,
    MainPage,
    Sn1Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
