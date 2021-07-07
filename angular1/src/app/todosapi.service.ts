import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ITodos } from './itodos';

@Injectable({
  providedIn: 'root'
})
export class TodosapiService {

  apiUrl:string = 'https://jsonplaceholder.typicode.com/todos'
  apiLimitCount:number = 5
  apiLimit:string = '?_limit=' + this.apiLimitCount

  constructor(private myHttp:HttpClient) { }

  getUrl():string{
    return this.apiUrl + this.apiLimit
  }

  getAllTodos():Observable<any>{
    return this.myHttp.get<any>(this.getUrl())
  }

  deleteTodo(todo:ITodos):Observable<any>{
    return this.myHttp.delete<any>(this.apiUrl + '/' + todo.id)
  }

  editTodo(todo:ITodos):Observable<any>{
    // RESTful API
    // put -> *one field edit 
    // post -> insert record

    return this.myHttp.put<any>(this.apiUrl + '/' + todo.id, {completed: true, title:'title 1'})
    //return this.myHttp.post<any>(this.apiUrl + '/' + todo.id, todo)
  }

  getTodoByID(id:number):Observable<any>{
    console.log(this.apiUrl + '/' + id)
    return this.myHttp.get(this.apiUrl + '/' + id)
  }


}
