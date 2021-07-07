import { Component } from '@angular/core';
import { ITodos } from './itodos';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular1';
  editTodoInfo:ITodos = {id:0,title:'',isCompleted:false};

  constructor(private myTodoService:TodosService){}

  addTodo(todo:ITodos):void{
    if (todo.id > 0)
    {
      this.myTodoService.editTodo(todo)
    } else {
      this.addTodo(todo)
    }
  }

  getTodos():ITodos[]{
    return this.myTodoService.getAllTodos()
  }

  deleteTodo(todo:ITodos):void{
    //this.todos = this.todos.filter(item => item.id != todo.id)
  }

  editTodo(todo:ITodos):void{
    this.editTodoInfo = todo
  }
}
