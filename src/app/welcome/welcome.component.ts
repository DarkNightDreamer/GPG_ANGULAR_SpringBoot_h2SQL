import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WelcomeDataService} from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message='Some welcome';
  welcomeMessageFromService:string;
  name='';

  constructor(private route: ActivatedRoute,
              private service: WelcomeDataService) { }

  ngOnInit(): void {
   // console.log(this.message);
    //this.route.snapshot.params['name'];
    this.name = this.route.snapshot.params['name'];
  }


  getWelcomeMessage(){
    console.log(this.service.excuteHelloWorldBeanService());
    this.service.excuteHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    console.log("get welcome message");
  }

  getWelcomeMessageWithParameter(){
    //console.log(this.service.excuteHelloWorldBeanService());
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    console.log('get welcome with param');
  }


  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message;
    //console.log(response);
    //console.log(response.message);
  }
  handleErrorResponse(error){
    this.welcomeMessageFromService = error.error.message;
  }
}
