import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Router} from '@angular/router';

export class Todo {
  constructor(
    public id:number,
    public description: string,
    public done:boolean,
    public targetDate: Date
  ){}
}



@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
todos : Todo[];
message: string;
  // = [
  // new Todo(1,"Learn to dance",false,new Date()),
  // new Todo(2,"Learn to eat",false,new Date()),
  // new Todo(3,"Learn to sleep",false,new Date()),
  // new Todo(4,"Learn to smoke",false,new Date()),

// ]



  constructor(private todoService:TodoDataService,
              private router : Router) { }

  ngOnInit(): void {
  this.refreshData();
}
refreshData(){
  this.todoService.retrieveAllTodos('in28').subscribe(
    response => {
      this.todos = response;
    }
  );
}

  deleteToDo(id) {
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodo('in 28',id).subscribe(
      response => {
        console.log(response);
        this.message= "Delete successful";
        this.refreshData();
      }
    )
  }

  updateToDo(id: number) {
    console.log("hello updater");
    this.router.navigate(['todos',id]);
  }
  addTodo(){
    this.router.navigate(['todos',-1]);
  }
}
