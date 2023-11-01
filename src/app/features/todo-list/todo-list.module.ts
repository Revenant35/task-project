import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';


@NgModule({
  declarations: [
    TodoItemComponent,
    TodoListComponent,
    TodoFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TodoListModule { }
