import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class EditModeMiddlewareService {
    isInEditMode = false;
}