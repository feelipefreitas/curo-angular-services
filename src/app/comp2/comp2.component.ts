import { Component, OnInit } from '@angular/core';
import { EditModeMiddlewareService } from '../services/edit-mode.middleware.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

  constructor(private _editModeMiddlewareService: EditModeMiddlewareService) { }

  ngOnInit(): void {
  }

  get editModeMiddlewareService() {
    return this._editModeMiddlewareService;
  }

}
