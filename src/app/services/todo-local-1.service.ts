import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ITodo } from "../interfaces/todo.interface";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TodoLocal1Service {
    private todoObj: ITodo = {} as ITodo;

    constructor(private _http: HttpClient) {}

    getTodoLocal(): Observable<ITodo> {
        if(this.hasTodoObj()) {
            return of(this.getTodoObj());
        } else {
            return this._http.get<ITodo>('https://jsonplaceholder.typicode.com/todos/1').pipe(
                map((todoResponse) => {
                    this.setTodoObj(todoResponse);
    
                    return this.getTodoObj();
                })
            );
        }
    }

    private setTodoObj(todoToSave: ITodo) {
        this.todoObj = todoToSave;
    }

    private getTodoObj(): ITodo {
        return this.todoObj;
    }

    private hasTodoObj(): boolean {
        if(this.todoObj.id !== undefined) {
            return true;
        } else {
            return false;
        }
    }
}