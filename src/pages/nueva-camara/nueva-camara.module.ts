import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevaCamaraPage } from './nueva-camara';

@NgModule({
  declarations: [
    NuevaCamaraPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevaCamaraPage),
  ],
})
export class NuevaCamaraPageModule {}
