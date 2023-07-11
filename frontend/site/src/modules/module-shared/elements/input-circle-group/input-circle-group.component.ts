import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input-circle-group',
  templateUrl: './input-circle-group.component.html',
  styleUrls: ['./input-circle-group.component.scss']
})
export class InputCircleGroupComponent implements OnInit {

  @Input() multi:boolean = true
  @Input() disabled:boolean = true
  @Input() labels:string[] = []
  @Input() checked:string[] = []
  @Output() checkedChange = new EventEmitter<string[]>()
  checkedStates:{checked:boolean, text:string}[] = []

  constructor() { }

  ngOnInit(): void {
    this.initCheckboxes()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initCheckboxes()
  }

  onCheckChange($event:{checked:boolean, text:string}) {
      if (this.multi) {
          if ($event.checked) {
            this.checked.push($event.text)
          }
          else {
            this.checked.splice(this.checked.indexOf($event.text), 1)
          }
      }
      else {
          if ($event.checked) {
            this.checked = [$event.text]
          }
          else {
            this.checked = []
          }
      }
      this.checkedChange.emit(this.checked)
      this.initCheckboxes()
  }

  initCheckboxes():void {
      var states:{checked:boolean, text:string}[] = []
      this.labels.forEach(text => {
          states.push({checked:this.checked.indexOf(text) > -1, text:text})
      })
      this.checkedStates = states
  }
}
