import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-circle-checkbox',
  templateUrl: './input-circle-checkbox.component.html',
  styleUrls: ['./input-circle-checkbox.component.scss']
})
export class InputCircleCheckboxComponent implements OnInit {

    @Input() text:string = ''
    @Input() checked:boolean = false
    @Input() disabled:boolean = false
    @Output() checkedChange = new EventEmitter<{checked:boolean, text:string}>()

    constructor() { }

    ngOnInit(): void {
    }

    toggleCheck():void {
      if (!this.disabled) {
          this.checked = !this.checked
          this.checkedChange.emit({checked:this.checked, text:this.text})
      }
    }
  }
