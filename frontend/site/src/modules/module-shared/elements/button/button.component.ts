import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text: string = ""
  @Input() size: string = ""
  @Input() disabled: boolean = false
  @Input() loadIndicator: boolean = false
  @Input() loadText: string = ""
  @Output() clickEvent = new EventEmitter<string>();
  @Input() isLoading: Boolean = false
  @Input() linkInternal:String = ""
  @Input() linkExternal:String = ""
  @Input() linkExternalTab:String = ""
  @Input() backgroundColor:String = ""
  @Input() backgroundColorStyle:String = ""
  @Input() borderRadius:String = ""

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) { }

  ngOnInit(): void {
  }

  handleClick() {
      if (this.loadIndicator) {
          this.isLoading = true
          this.clickEvent.emit()
      }
      else if (this.linkInternal.length > 0) {
          this.router.navigateByUrl(String(this.linkInternal))
      }
      else if (this.linkExternal.length > 0) {
          this.document.location.href = String(this.linkExternal)
      }
      else if (this.linkExternalTab.length > 0) {
          window.open(String(this.linkExternalTab), "_blank");
      }
      else {
          this.clickEvent.emit()
    }
  }

  clear() {
      if (this.loadIndicator) {
          this.isLoading = false
      }
  }
}
