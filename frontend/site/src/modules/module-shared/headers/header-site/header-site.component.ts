import { Component, OnInit } from '@angular/core';
import * as models from '../../../module-shared/models/models.barrel'
import * as services from '../../../module-shared/services/services.barrel'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header-site',
  templateUrl: './header-site.component.html',
  styleUrls: ['./header-site.component.scss']
})
export class HeaderSiteComponent implements OnInit {

  isSideBarVisible:boolean = false; 
  isPopupAddVisible:boolean = false; 
  isPopupRemoveVisible:boolean = false;

  constructor(private route:ActivatedRoute, private router:Router, private windowScrollingService: services.WindowScrollingService) {
  }

  ngOnInit(): void {
  }

  openSidebar() {
    this.isSideBarVisible = true;
  }

  hideSidebar() { 
    this.isSideBarVisible = false;
  }

  openAddPopup() {
    this.isPopupAddVisible = true;
  }

  openRemovePopup(index:number) {
    this.isPopupRemoveVisible = true;
  }

  hidePopups() {
    this.isPopupAddVisible = false;
    this.isPopupRemoveVisible = false;
  }
}
