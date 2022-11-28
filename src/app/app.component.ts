import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
import {gettodos} from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';
  todos! :TodoComponent[]
    constructor(){
      gettodos().then (todos =>{
        console.log(todos)
        this.todos = todos
        //this.completeAll()
        console.log(this.todos)
      })
    }
    // completeAll(){
    //   this.todos = this.todos.map(todo =>{
    //     return { ...todo,completed : true}

    //   })
    // }
  }

