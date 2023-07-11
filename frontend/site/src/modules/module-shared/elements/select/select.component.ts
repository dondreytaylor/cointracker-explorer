import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() options:any[] = []
  @Input() optionSelected:string = ''
  @Input() omitDefault:boolean = false
  @Input() optionDefault:string = ''
  @Input() disabled:boolean = false
  @Input() borderRadius: string = ''
  @Input() fontSize: string = ''
  @Input() buttonHeight: string = ''
  @Input() padding: string = ''
  @Output() optionSelectedChange = new EventEmitter<string>()
  @Output() onChange = new EventEmitter()
  optionLabelValues:{label:string, value:string}[] = []
  @Output() onfocus = new EventEmitter();
  @Output() onblur = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onBlur(e:any):void {
    this.onblur.emit()
  }

  onFocus(e:any):void {
    this.onfocus.emit()
  }

  ngOnChanges(changes:SimpleChanges) {
    if (this.optionLabelValues.length === 0) {
      this.optionLabelValues = this.options.map(function(option) {
          if (typeof option === 'object' && typeof option.value == 'string' && typeof option.label == 'string') {
            return option
          }
          else if (typeof option === 'string') {
            return {label: option, value: option}
          }
          else {
            return {label: '', value: ''}
          }
      })
    }
  }

  onStateChange():void {
    this.optionSelectedChange.emit(this.optionSelected)
    this.onChange.emit();
  }
}
