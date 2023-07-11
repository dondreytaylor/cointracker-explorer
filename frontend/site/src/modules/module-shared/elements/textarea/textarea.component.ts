import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {

  @Input() placeholder: string = ''
  @Input() inputField: string = ''
  @Input() maxlength: string = ''
  @Input() disabled:Boolean = false
  @Output() inputFieldChange = new EventEmitter<string>();
  @Output() inputFieldEnter = new EventEmitter<string>();
  @Output() onfocus = new EventEmitter();
  @Output() onblur = new EventEmitter();
  @Output() oninput = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onBlur(e:any):void {
    this.onblur.emit()
  }

  onFocus(e:any):void {
    this.onfocus.emit()
  }

  onInput(e:any):void {
    this.oninput.emit(this.inputField)
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
