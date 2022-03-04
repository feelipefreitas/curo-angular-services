import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { ITodo } from "../interfaces/todo.interface";
import { LocalDataSaver } from "../models/local-data-saver.model";

@Injectable({
    providedIn: 'root'
})
export class TodoLocal2Service extends LocalDataSaver<ITodo> {
    constructor(private _http: HttpClient) {
        super();
    }

    getTodoLocal(): Observable<ITodo> {
        if(this.hasLocalObjSaved()) {
            return of(this.getLocalObjSaved());
        } else {
            return this._http.get<ITodo>('https://jsonplaceholder.typicode.com/todos/1').pipe(
                map((todoResponse) => {
                    this.setLocalObj(todoResponse);

                    return this.getLocalObjSaved();
                })
            );
        }
    }
}