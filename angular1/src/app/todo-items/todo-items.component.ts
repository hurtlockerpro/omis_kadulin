import { Component, OnInit } from '@angular/core';
import { ITodos } from '../itodos';
import { TodosService } from '../todos.service';
import { TodosapiService } from '../todosapi.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss']
})
export class TodoItemsComponent implements OnInit {

  title = 'angular1';
  editTodoInfo:ITodos = {id:0,title:'',isCompleted:false};
  todos:ITodos[] = []

  constructor(private myTodoService:TodosService, private myTodosapiService:TodosapiService){}

  ngOnInit(){
    this.myTodosapiService.getAllTodos().subscribe(todos => {
      this.todos = todos
    })
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
