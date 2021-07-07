import { Component, OnInit } from '@angular/core';
import { ITodos } from './itodos';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular1';
  editTodoInfo:ITodos = {id:0,title:'',isCompleted:false};

  constructor(private myTodoService:TodosService){}

  ngOnInit(){

  }

  addTodo(todo:ITodos):void{
    if (todo.id > 0)
    {
      this.myTodoService.editTodo(todo)
    } else {
      this.myTodoService.addTodo(todo)
    }
  }

  getTodos():ITodos[]{
    return this.myTodoService.getAllTodos()
  }

  deleteTodo(todo:ITodos):void{
    this.myTodoService.deleteTodo(todo)
  }

  editTodo(todo:ITodos):void{
    this.editTodoInfo = todo
  }
}
