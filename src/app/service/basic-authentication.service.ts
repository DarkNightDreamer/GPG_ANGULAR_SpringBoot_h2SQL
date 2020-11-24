import {APP_ID, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HelloWorldBean} from './data/welcome-data.service';
import {map} from 'rxjs/operators';
import {API_URL} from '../app.constants';


export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticaterUser';



// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) {
  }

  // authenticate(username, password) {
  //   // console.log('before' + this.isUserLoggedIn());
  //   if (username === "hedi" && password === "ayedi") {
  //     sessionStorage.setItem('authenticaterUser', username);
  //     // console.log('after' + this.isUserLoggedIn());
  //     return true;
  //   }
  //   return false;
  // }




  executeJWTAuthenticationService(username, password) {

    return this.http.post<any>(
      `${API_URL}/authenticate`,
      {
        username,
        password
      }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          //console.log(data);
          return data;
        }
      )
    );
    // console.log('Execute Hello World Bean Service')
  }













  executeAuthenticationService(username, password) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<AuthenticationBean>(
      `${API_URL}/basicauth`,
      {headers}
    ).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);
          //console.log(data);
          return data;
        }
      )
    );
    // console.log('Execute Hello World Bean Service')
  }


  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }
  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()){
    return sessionStorage.getItem(TOKEN);
  }}

  isUserLoggedIn() {
    const user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);

  }
}
  export class AuthenticationBean {
  constructor(public message: string) {

  }
}


