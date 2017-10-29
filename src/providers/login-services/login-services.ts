import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginServicesProvider {

  headers: Headers;
  headersPost: Headers;
  options: RequestOptions;

  constructor(public http: Http) {
  }

  public login(postParams){
//"{\"header\":{\"ipHost\" : \"" + ip + "\", \"apiKey\": \"" + CLIENT_ID + "\", \"userId\": " + sessionStorage.getItem(USER_ID) + " }, \"tokenAcceso\":\"" + sessionStorage.getItem(TOKEN) + "\"}";

    let body ={usuario : postParams.usuario
    ,contrasenia:postParams.contrasenia};

    // "{\"header\":{\"usuario\" : \"" + postParams.usuario
   // + "\", \"contrasenia\": \"" + postParams.contrasenia+  "\"}";
    //'usuario:'+postParams.usuario+'&contrasenia:'+postParams.contrasenia;
    this.headersPost = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*'
    });

    let optionspost = new RequestOptions({
       headers: this.headersPost
    })

    return new Promise ((resolve, reject)=>{
      this.http.post('http://139.162.118.169:8080/ProyectoAndroid/webresources/autenticacion',body,optionspost)
      .subscribe(res=>{
        resolve(res);
      },(err)=>{
        resolve(err);
      });
    });
  }
}
