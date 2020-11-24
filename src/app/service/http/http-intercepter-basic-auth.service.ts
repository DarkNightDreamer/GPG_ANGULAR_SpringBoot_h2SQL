import { Injectable } from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {BasicAuthenticationService} from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor(private basicAuthenticationService: BasicAuthenticationService) { }
//   intercept(req: HttpRequest<any>, next: HttpHandler){
//     // let username = 'hedi';
//     // let password = 'ayedi';
//    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password );
// // this.basicAuthenticationService.getAuthenticatedToken();
// let basicAuthHeaderString =  this.basicAuthenticationService.getAuthenticatedToken();
// let username = this.basicAuthenticationService.getAuthenticatedUser();
//
// if (basicAuthHeaderString && username){
//   req = req.clone({
//     setHeaders : {
//       Authorization: basicAuthHeaderString
//     }
//   });
// }
// return next.handle(req);
//   }
  intercept(request: HttpRequest<any>, next: HttpHandler){
    // let username = 'in28minutes'
    // let password = 'dummy'
    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser()

    if(basicAuthHeaderString && username) {
      request = request.clone({
        setHeaders : {
          Authorization : basicAuthHeaderString
        }
      });
    }
    return next.handle(request);
  }


}

