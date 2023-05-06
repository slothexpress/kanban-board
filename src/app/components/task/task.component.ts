import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  todos: string[] = [];
  ongoings: string[] = []
  dones: string[] = []

  newTodo!: string;

  constructor() { }

  ngOnInit(): void {
    document.getElementById("inputTodo")?.focus();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  addTodo() {
    if(this.newTodo) {
      this.todos.push(this.newTodo);
      this.newTodo = "";
    }
  }

}
