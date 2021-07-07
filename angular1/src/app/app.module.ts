import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MytestComponent } from './mytest/mytest.component';
import { FormsModule } from '@angular/forms';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoRowComponent } from './todo-row/todo-row.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoDetailComponent } from './todo-detail/todo-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    MytestComponent,
    TodoAddComponent,
    TodoRowComponent,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
