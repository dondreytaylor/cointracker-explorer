import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-binary-selection',
  templateUrl: './input-binary-selection.component.html',
  styleUrls: ['./input-binary-selection.component.scss']
})
export class InputBinarySelectionComponent implements OnInit {

  @Input() selections:string[] = []
  @Input() selected:string = ''
  @Output() selectedChange = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  select(index:number) {
    var selectedLabel:string = this.selections.length > index ? this.selections[index] : ''
    this.selectedChange.emit(selectedLabel != this.selected ? selectedLabel : '') 
  }

}
