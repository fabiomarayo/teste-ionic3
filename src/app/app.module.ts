import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ViewOnMap } from '../pages/view-on-map/view-on-map';
import { PageCreate } from '../pages/create/create';
import { MapService } from '../service/maps';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ViewOnMap,
    PageCreate
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ViewOnMap,
    PageCreate
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MapService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
