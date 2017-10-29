import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProyectServiceProvider {
  headers: Headers;
  headersPost: Headers;
  options: RequestOptions;

  constructor(public http: Http) {
    console.log('Hello ProyectServiceProvider Provider');
  }

  getJsonData() {
    this.headersPost = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      'usuario': 'admin',//preguntar si si  es el de la bd 
      'contrasenia': 'admin'
    });

    let optionspost = new RequestOptions({
      headers: this.headersPost
    })

    return this.http.get('http://139.162.118.169:8080/ProyectoAndroid/webresources/com.android.entidades.camara',
      optionspost)
      .map(res => res.json());
  }

  getData() {
    this.headersPost = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      'usuario': 'admin',
      'contrasenia': 'admin'
    });

    let optionspost = new RequestOptions({
      headers: this.headersPost
    })

    return new Promise((resolve, reject) => {
      this.http.get('http://139.162.118.169:8080/ProyectoAndroid/webresources/com.android.entidades.camara', optionspost)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          resolve(err);
        });
    });
  }

  public guardarCamara(postParams) {
    /**
     *   direccionubicacion: string;
    estado: string;
    fase :string;
    numeromatriz :string;
    observacion :string;
    tipocamara:string
     */

    this.headersPost = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'usuario': 'admin',
      'contrasenia': 'admin'
    });

    let optionspost = new RequestOptions({
      headers: this.headersPost
    })

    return new Promise((resolve, reject) => {
      this.http.post('http://139.162.118.169:8080/ProyectoAndroid/webresources/com.android.entidades.camara', {
        direccion: postParams.direccion,
        estado: postParams.estado,
        fase: postParams.fase,
        nmatriz: postParams.nmatriz,
        observacion: postParams.observacion,
        tipocamara: postParams.tipocamara
      }, optionspost)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          resolve(err);
        });
    });
  }

  public borrarCamara(token, id) {
    this.headersPost = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer ' + token
    });


    let optionspost = new RequestOptions({
      headers: this.headersPost
    });

    return new Promise((resolve, reject) => {
      this.http.delete('http://139.162.118.169:8080/ProyectoAndroid/webresources/com.android.entidades.camara/' + id, optionspost)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          resolve(err);
        })
    })
  }

  public actualizarCamara(token, id, postParams) {

    this.headersPost = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer ' + token
    });

    let optionspost = new RequestOptions({
      headers: this.headersPost
    });

    return new Promise((resolve,reject) => {
      this.http.put('http://139.162.118.169:8080/ProyectoAndroid/webresources/com.android.entidades.camara/'+ id, {
        direccion: postParams.direccion,
        estado: postParams.estado,
        fase: postParams.fase,
        nmatriz: postParams.nmatriz,
        observacion: postParams.observacion,
        tipocamara: postParams.tipocamara
      }, optionspost)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          resolve(err);
        })
    });
  }
}