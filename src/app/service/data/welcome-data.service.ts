import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class HelloWorldBean {
  // @ts-ignore
  constructor(public message: string){}
}




@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  excuteHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/helloworldbean')
   // console.log("Excute hllo world bean servicce");
    //http://localhost:8080/helloworldbean/path-variable/hedi
  }




//   excuteHelloWorldBeanServiceWithVariable(name){
//     //console.log('Excute hllo world bean servicce');
//
//     let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
//     let headers = new HttpHeaders(
//       {
//         Authorization: basicAuthHeaderString
//       }
//     );
//
//     return this.http.get<HelloWorldBean>(`http://localhost:8080/helloworldbean/path-variable/${name}`,
//       {headers});
//     // http://localhost:8080/helloworldbean/path-variable/hedi
//   }
//
// createBasicAuthenticationHttpHeader(){
//     let username = 'hedi';
//     let password = 'ayedi';
//     let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password );
//     return basicAuthHeaderString;
// }


  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    // console.log("Execute Hello World Bean Service")
  }
  // http://localhost:8080/hello-world/path-variable/in28minutes

  executeHelloWorldServiceWithPathVariable(name) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // let headers = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    //   })

    return this.http.get<HelloWorldBean>(
      `http://localhost:8080/helloworldbean/path-variable/${name}`,
      // {headers}
    );
    // console.log("Execute Hello World Bean Service")
  }

}
