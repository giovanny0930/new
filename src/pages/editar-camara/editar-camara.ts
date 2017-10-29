import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController} from 'ionic-angular';
import { Camara } from '../../interfaces/camara.interface';
import { HomePage } from "../home/home";
//creamos el proveedor
import {ProyectServiceProvider} from '../../providers/proyect-service/proyect-service'
/**
 * Generated class for the EditarCamaraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar-camara',
  templateUrl: 'editar-camara.html',
})
export class EditarCamaraPage {
  token: string;
  direccion: string;
  estado: string;
  fase :string;
  nmatriz :string;
  observacion :string;
  tipocamara:string;
  camara: Camara; 
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public proyectService: ProyectServiceProvider) {
      this.token = navParams.get('token');
      this.camara = navParams.get('camara');
    }
  
  
    editarCamara() {
      let postParams = {       
        direccion: this.direccion,
        estado: this.estado,
        fase :this.fase,
        nmatriz :this.nmatriz,
        observacion :this.observacion,
        tipocamara:this.tipocamara
        
        }
      this.proyectService.actualizarCamara(this.token, this.camara.nmatriz, this.camara)
        .then((pdct) => {
          let respuesta = JSON.parse(pdct["_body"]);
          this.editConfirm();
          this.navCtrl.setRoot(HomePage, {
            token: respuesta.token
          });
        }).catch((err) => {
          console.log(err);
        })
    }
    editConfirm() {
      const alert = this.alertCtrl.create({
        title: 'Actualizado',
        buttons: ['Aceptar']
      });
      alert.present();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarCamaraPage');
  }

}
