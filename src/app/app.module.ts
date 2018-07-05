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
import { MapPage } from '../pages/map/map';
import { MapgooglePage } from '../pages/mapgoogle/mapgoogle';
import { MapphotoPage } from '../pages/mapphoto/mapphoto';

//import package img viewer
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Sn1Page,
    MainPage,
    Sn1Page,
    MapPage,
    MapgooglePage,
    MapphotoPage,

  ],
  imports: [
    BrowserModule,
    PopupPageModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Sn1Page,
    MainPage,
    Sn1Page,
    MapPage,
    MapgooglePage,
    MapphotoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
