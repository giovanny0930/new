import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarCamaraPage } from './editar-camara';

@NgModule({
  declarations: [
    EditarCamaraPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarCamaraPage),
  ],
})
export class EditarCamaraPageModule {}
