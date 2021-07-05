import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ITodos } from '../itodos';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  @Output() frmTodo: EventEmitter<any> = new EventEmitter()
  todoTitle:string = ''
  @Input() todo:ITodos = {id:0, title:'',isCompleted: false}

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(todo:ITodos):void {

    const newTodo:ITodos = {
      id: todo.id > 0 ? todo.id : -1,
      title: this.todoTitle,
      isCompleted: false
    }
    //console.log(newTodo)
    this.frmTodo.emit(newTodo)
  }

  onEdit(todo:ITodos){
    console.log(todo)
  }

}
