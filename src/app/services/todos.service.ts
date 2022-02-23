import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class TodosService {
    constructor(private _http: HttpClient) {}

    getTodos() {
        return this._http.get('https://jsonplaceholder.typicode.com/todos/1');
    }
}