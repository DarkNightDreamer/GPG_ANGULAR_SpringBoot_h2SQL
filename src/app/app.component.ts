import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todo';
  tab = ['hedi', 'ayedi', 'mohsen'];

  // function Delete(){
  //   this.tab.pop();
  // }
  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
    this.tab.pop();
  }

  onajout(fre: string){
    this.tab.push(fre);
  }
}

