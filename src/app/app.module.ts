import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { NuevaCamaraPage } from '../pages/nueva-camara/nueva-camara';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { EditarCamaraPage } from '../pages/editar-camara/editar-camara';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProyectServiceProvider } from '../providers/proyect-service/proyect-service';

import { LoginServicesProvider } from '../providers/login-services/login-services';

import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    NuevaCamaraPage,EditarCamaraPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
     HttpModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,NuevaCamaraPage,EditarCamaraPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProyectServiceProvider,LoginServicesProvider
  ]
})
export class AppModule {}
