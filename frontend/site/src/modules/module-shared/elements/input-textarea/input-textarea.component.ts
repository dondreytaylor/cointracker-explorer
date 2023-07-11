import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.scss']
})
export class InputTextareaComponent implements OnInit {

  @Input() placeholder: string = ''
  @Input() inputField: string = ''
  @Input() maxlength: string = ''
  @Input() rows: string = '5'
  @Input() disabled:Boolean = false
  @Output() inputFieldChange = new EventEmitter<string>();
  @Output() inputFieldEnter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onChange():void {
    this.inputFieldChange.emit(this.inputField)
  }

  onKeyUp(e:any):void {
    if(e.keyCode === 13) {
       this.inputFieldEnter.emit(this.inputField)
    }
  }

}
