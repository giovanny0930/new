import { sample } from 'rxjs/operator/sample';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { LoginServicesProvider } from '../../providers/login-services/login-services';
import { User } from '../../models/user';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public usuario: string;
  public contrasenia: string;
  rootPage:any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams, public http: Http, 
     public loginService: LoginServicesProvider, public navCotroller:NavController) {
  }

  login(){
    let postParams = {
      usuario : this.usuario,
      contrasenia : this.contrasenia
    }
    this.loginService.login(postParams)
    .then((user)=>{
      let respuesta = JSON.parse(user["_body"]);
      alert(respuesta);
      this.navCotroller.setRoot(HomePage, {
        token: respuesta.token
      });    
    }).catch((err)=>{
      alert("error "+err);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
}