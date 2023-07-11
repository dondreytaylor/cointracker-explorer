import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-search-with-filter',
  templateUrl: './input-search-with-filter.component.html',
  styleUrls: ['./input-search-with-filter.component.scss']
})
export class InputSearchWithFilterComponent implements OnInit {

    @Input() placeholder: string = 'Search Learn Money'
    @Input() inputField: string = ''
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
