import { Component, OnInit } from '@angular/core';
import { EditModeMiddlewareService } from '../services/edit-mode.middleware.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  constructor(private _editModeMiddlewareService: EditModeMiddlewareService) { }

  ngOnInit(): void {
  }

  activateEdition() {
    this._editModeMiddlewareService.isInEditMode = true;
  }
}
