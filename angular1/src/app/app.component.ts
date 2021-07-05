import { Component } from '@angular/core';
import { ITodos } from './itodos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular1';
  editTodoInfo:ITodos = {id:0,title:'',isCompleted:false};

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

  addTodo(todo:ITodos):void{
    if (todo.id > 0)
    {
      // TODO edit todo
      console.log(todo)
      this.todos.forEach(item => {
        if (item.id == todo.id)
        {
          item.title = todo.title
        }
      })

    } else {
      todo.id = this.todos.length + 1
      this.todos.push(todo)
    }
  }

  deleteTodo(todo:ITodos):void{
    this.todos = this.todos.filter(item => item.id != todo.id)
  }

  editTodo(todo:ITodos):void{
    this.editTodoInfo = todo
  }
}
