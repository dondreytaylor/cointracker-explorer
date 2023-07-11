import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent implements OnInit {

  id:string = Math.random().toString(36).substr(2, 5);

  @Input() size:string = '' // large
  @Input() state:boolean = false
  @Input() disabled:boolean = false
  @Output() stateChange = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  onStateChange(updatedState:boolean):void {
    this.state = updatedState
    this.stateChange.emit(this.state)
  }

}
