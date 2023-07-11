import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as services from '../../services/services.barrel'


@Component({
  selector: 'app-input-select-dropdown',
  templateUrl: './input-select-dropdown.component.html',
  styleUrls: ['./input-select-dropdown.component.scss']
})
export class InputSelectDropdownComponent implements OnInit {

  @Input() disabled:Boolean = false
  @Input() showIcons:Boolean = false
  @Input() defaultSelectionHeading:string = ''
  @Input() canDeselect:boolean = false;
  @Input() isLoading:boolean = false;
  @Input() loadingText:string = ""; 
  

  @Output() onselect = new EventEmitter<{value:string, icon:string, heading:string, subheading:string}>();
  @Output() ondeselect = new EventEmitter();

  @Input() optionSelected?:{value:string, icon:string, heading:string, subheading:string} = undefined // must match 'value' key
  @Input() options:{value:string, icon:string, heading:string, subheading:string}[] = []

  isDropdownVisible:boolean = false; 

  constructor() { }

  ngOnInit(): void {
  }

  onDeselect(index:number) {
    this.optionSelected = undefined;
    this.ondeselect.emit()
  }

  toggleDropdown() {
    if (!this.disabled && !this.isLoading) {
      this.isDropdownVisible=!this.isDropdownVisible
    }
  }
  
  onSelect(index:number) {
     if (this.options[index]) {
      if (this.optionSelected == undefined || this.options[index].value != this.optionSelected?.value) {
        this.optionSelected = this.options[index]
        this.onselect.emit(this.options[index]);
      }
      else if (this.canDeselect) {
        this.onDeselect(index);
      }
      this.isDropdownVisible = false;
    }
  }

}
