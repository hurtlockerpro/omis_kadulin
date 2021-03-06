import { Component, OnInit, Input, OnChanges, OnDestroy, DoCheck, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { ITodos } from '../itodos';

@Component({
  selector: 'app-todo-row',
  templateUrl: './todo-row.component.html',
  styleUrls: ['./todo-row.component.scss']
})
export class TodoRowComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {

  @Input() todoTitle:string = ''
  @Input() todo:ITodos = {id:0, title:'', isCompleted:false}

  @Output() deleteTodo: EventEmitter<ITodos> = new EventEmitter()
  @Output() editTodo: EventEmitter<ITodos> = new EventEmitter()

  
  x = 20

  constructor() { }

  ngOnInit(): void {
    this.x = 55
    console.log('ngOnInit' + this.x) 
  }
  ngOnDestroy():void {
    console.log('ngOnDestroy')
  }
  /*
  ngDoCheck():void {
    //console.log('DoCheck')
    console.log(this)
  }*/
  ngOnChanges():void {
    console.log('OnChanges' + this.x)
  }
  ngAfterViewInit():void {
    console.log('AfterViewInit')
  }


  checkboxOnChange(todo:ITodos):void {
    this.todo.isCompleted = !todo.isCompleted 
    console.log(this.todo.isCompleted)
  }

  setClass(){
    return {
      'textCompleted': this.todo.isCompleted,
      'fontBold': true
    }
  }

  onDelete(todo:ITodos):void{
    this.deleteTodo.emit(todo)
  }

  onEdit(todo:ITodos):void{
    this.editTodo.emit(todo)
  }

}
