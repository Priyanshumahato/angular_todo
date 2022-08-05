import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  // AS we take input from todos we need to tel compiler that we are taking the inputs

  @Input() todo: Todo;
  @Input() i: number;
  // event emitter in angular: 
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo: Todo){
    // the todo component goes to output component this is our custom event
    this.todoDelete.emit(todo);
    console.log("onClick has been triggerd")
  }
  onCheckboxClick(todo){
    console.log(todo)
    this.todoCheckbox.emit(todo);
  }
}
