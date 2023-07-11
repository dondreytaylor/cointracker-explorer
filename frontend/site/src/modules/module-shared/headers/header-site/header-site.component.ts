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

  trackedAddresses:string[] = []; 
  
  fieldSearch:string = ""
  fieldAddAddress:string = ""; 
  fieldRemoveAddressIndex:number = -1

  constructor(private route:ActivatedRoute, private router:Router, private windowScrollingService: services.WindowScrollingService) {
  }

  ngOnInit(): void {
    this.route.queryParams.pipe().subscribe(data=> {
      this.fieldSearch = data.addr || "";
    })
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
    this.fieldRemoveAddressIndex = index;
  }

  hidePopups() {
    this.isPopupAddVisible = false;
    this.isPopupRemoveVisible = false;
    this.fieldRemoveAddressIndex = -1;
    this.fieldAddAddress = "";
  }
  
  canAddAddress():boolean {
    return this.fieldAddAddress.length > 0;
  }

  addAddress() {
    if (this.canAddAddress()) { 
      this.trackedAddresses.push(this.fieldAddAddress);
      this.hidePopups();
    }
  }

  removeAddress() { 
    this.trackedAddresses.splice(this.fieldRemoveAddressIndex, 1);
    this.hidePopups();
  }

  search() {
    //this.router.navigateByUrl("/bitcoin/address?addr=" + this.fieldSearch);
    window.location.href = "/bitcoin/address?addr=" + this.fieldSearch
  }
}
