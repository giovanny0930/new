import { Component } from '@angular/core';
import { Refresher } from "ionic-angular"
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { EditarCamaraPage } from '../editar-camara/editar-camara';
import { NuevaCamaraPage } from '../nueva-camara/nueva-camara';
//creamos el proveedor
import { ProyectServiceProvider } from '../../providers/proyect-service/proyect-service'
import { Camara } from '../../interfaces/camara.interface';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ProyectServiceProvider],
})

export class HomePage {

  // camaras:Camara[] = [];
  token: string;
  loadding: any
  newsData: any//calculamos lo que nos va a retornar los servicios 

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loaddingCtrl: LoadingController, private alertCtrl: AlertController,
    public proyectProvider: ProyectServiceProvider) {

    this.loadding = this.loaddingCtrl.create({
      content: `<ion-spinner></ion-spinner>`
    })
    this.getData();

    this.token = navParams.get('token');
    let idUsuario = proyectProvider.getJsonData;

  }

  nuevacamara() {
    this.navCtrl.push(NuevaCamaraPage, {
      token: this.token
    });
  }

  getData() {
    // this.loadding.present();
    this.proyectProvider.getData().then((datos) => {
      this.newsData = datos;
      // this.loadding.dismiss();
    });
    this.proyectProvider.getJsonData().subscribe(

      result => {

        this.newsData = result;
        console.log("Sucess: " + this.newsData);

      }, err => {
        console.error("Error:" + err);
      },
      () => {
        console.log("Cerrando loading");
        this.loadding.dismiss();
        console.log("getData completed ");

      }

    )

  }

  recargar_pagina(refresher: Refresher) {
    console.log("Inicio del refresh");
    setTimeout(() => {
      console.log("Terminó el refresh");
      /* this.loadding= this.loaddingCtrl.create({
         content:`<ion-spinner></ion-spinner>`
          })*/

      this.getData();
      refresher.complete();
    }, 1500)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  borrarCamaras(id) {
    this.deleteConfirm((res) => {
      if (res) {
        this.proyectProvider.borrarCamara(this.token, id)
          .then((pdct) => {
            this.getData();
          })
          .catch((err) => {
            console.log(err);
            alert("Error al eliminar la camara");
          })
      }
    });
  }

  deleteConfirm(callback: any) {
    let alert = this.alertCtrl.create({
      title: 'Eliminar',
      message: 'Esta seguro que desea eliminar la camara ?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            return callback(false);
          }
        },
        {
          text: 'Si',
          handler: () => {
            return callback(true);
          }
        }
      ]
    });
    alert.present();
  }
  editarCamara(camara) {
    this.navCtrl.push(EditarCamaraPage, {
      token: this.token,
      camara: camara
    })
  }

}