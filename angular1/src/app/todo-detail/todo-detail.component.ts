import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ITodos } from '../itodos';
import { TodosapiService } from '../todosapi.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

  todoID:number = 0
  todo:any = ''

  constructor(private _activatedRoute: ActivatedRoute, private myTodoApiService:TodosapiService) { }

  ngOnInit(): void  {
    this._activatedRoute.paramMap.subscribe( (urlParams:ParamMap) => {
      this.todoID = parseInt(urlParams.get('id222')!)
      // TODO 
      this.todo = this.myTodoApiService.getTodoByID(this.todoID)
      console.log(this.todo)
    })
  }

}
