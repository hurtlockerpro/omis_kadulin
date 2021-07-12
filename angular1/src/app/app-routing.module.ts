import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';

const routes: Routes = [
  {path:'todo-detail/:id222', component:TodoDetailComponent},
  {path:'todo-items', component:TodoItemsComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:TodoItemsComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
