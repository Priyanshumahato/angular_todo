import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';  
import { Todo } from "../../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})

export class TodosComponent implements OnInit {
  localItem: string;
  todos: Todo[];
  constructor() {
    this.localItem = localStorage.getItem('todos');
    if (this.localItem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {}

  deleteTodo(todo: Todo) {
    console.log(todo);
    // to get the index of the array
    const index = this.todos.indexOf(todo);
    // splice delete the element at index in the array
    // if you cant find an element use this to get the element
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  toggleTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    console.log(index);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));

    console.log(todo);
  }
}
