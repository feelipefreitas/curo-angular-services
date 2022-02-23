import { Component, OnInit } from '@angular/core';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  texto = '';

  constructor(private _todosService: TodosService) {}

  ngOnInit(): void {
    this._todosService.getTodos().subscribe(
      (todosResponse) => {
        console.log(todosResponse);
      }
    );   
  }
}
