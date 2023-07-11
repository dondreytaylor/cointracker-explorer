import { Component, OnInit } from '@angular/core';
import * as services from '../../../module-shared/services/services.barrel'
import { ActivatedRoute } from '@angular/router';
import { BTCUnits } from '../../../module-shared/constants/BTCUnits'
import { BTCAddressData } from '../../../module-shared/constants/BTCAddressData'


@Component({
  selector: 'app-page-address',
  templateUrl: './page-address.component.html',
  styleUrls: ['./page-address.component.scss']
})
export class PageAddressComponent implements OnInit {

  isFetching:boolean = true; 
  BTCUnits = BTCUnits
  BTCAddressData = BTCAddressData

  addressData:any = BTCAddressData.Addresses["1PYexakYRvWnzYa21kPWqbXgwPvLjnttMp"];
  
  constructor(private blockchain:services.BlockchainCOM, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.isFetching = true;
    this.router.queryParams.pipe().subscribe(queryParams=> {
      if (queryParams.addr != undefined) {
        //this.blockchain.getBTCAddress(queryParams.addr).pipe().subscribe(data=> {
         //   this.addressData = data;
            this.isFetching = false;
        //})
      }
      else {
        this.isFetching = true;
      }
    })
  }

  getDate(time:number) {
    return (new Date(time * 1000)).toString();
  }

}
