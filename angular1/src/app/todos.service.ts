import { Injectable } from '@angular/core';
import { ITodos } from './itodos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todos:ITodos[] = [
    {
      id: 1,
      title: 'my Todo 1',
      isCompleted: false
    },
    {
      id: 2,
      title: 'my Todo 2',
      isCompleted: false
    },
    {
      id: 3,
      title: 'my Todo 3',
      isCompleted: true
    }
  ]

  constructor() { }

  addTodo(todo:ITodos):void{
      todo.id = this.todos.length + 1
      this.todos.push(todo)
  
  }

  editTodo(todo:ITodos):void {
    // TODO edit todo
    console.log(todo)
    this.todos.forEach(item => {
      if (item.id == todo.id)
      {
        item.title = todo.title
      }
    })
  }

  getAllTodos():ITodos[]{
    return this.todos;
  }

  deleteTodo(todo:ITodos):void{
    this.todos = this.todos.filter(item => item.id != todo.id)
  }

}
