import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProyectServiceProvider } from "../../providers/proyect-service/proyect-service";
import { HomePage } from "../home/home";


@IonicPage()
@Component({
  selector: 'page-nueva-camara',
  templateUrl: 'nueva-camara.html',
})
export class NuevaCamaraPage {
  token: string;
  direccion: string;
  estado: string;
  fase :string;
  nmatriz :string;
  observacion :string;
  tipocamara:string

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,public proyectService: ProyectServiceProvider,public navController: NavController) {
    this.token = navParams.get('token');   
  }
  
 guardarCamara() {
    let postParams = {       
    direccion: this.direccion,
    estado: this.estado,
    fase :this.fase,
    nmatriz :this.nmatriz,
    observacion :this.observacion,
    tipocamara:this.tipocamara
    
    }
    this.proyectService.guardarCamara(postParams)
    .then((pdct) => {
      let respuesta = JSON.parse(pdct["_body"]);
      alert("Camara registrada con éxito");
      this.navCtrl.setRoot(HomePage, {
        token: respuesta.token
       });    
    }).catch((err) => {
      console.log(err);
    })
  
  }

  limpiar(){
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevaCamaraPage');
  }

}
