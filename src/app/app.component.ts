import { Component, OnInit } from '@angular/core';
import { ITodo } from './interfaces/todo.interface';
import { TodoLocal1Service } from './services/todo-local-1.service';
import { TodoLocal2Service } from './services/todo-local-2.service';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  texto = '';

  constructor(
    private _todosService: TodosService, 
    private _todoLocal1Service: TodoLocal1Service,
    private _todoLocal2Service: TodoLocal2Service,
  ) {}

  ngOnInit(): void {
    
  }

  getTodoLocal1() {
    this._todoLocal1Service.getTodoLocal().subscribe((todoResponse: ITodo) => {
      console.log(todoResponse);
    });
  }

  getTodoLocal2() {
    this._todoLocal2Service.getTodoLocal().subscribe((todoResponse: ITodo) => {
      console.log(todoResponse);
    });
  }
}
