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

  // Indicates whether we are fetching transactions
  isFetching:boolean = true; 

  // Helper units for BTC conversion
  BTCUnits = BTCUnits

  // Dummy data for addresses (used as fallback)
  BTCAddressData = BTCAddressData

  // Stores current address
  address:string = ""

  // Stores current address's data
  addressData:any = {}

  // Stores current address's transactions
  addressTransactionsData:any = {}

  // Pagination parameters
  page:number = 1
  pagetotal:number = 1
  pagesize:number = 20
  
  constructor(private blockchain:services.BlockchainCOM, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.isFetching = true;
    this.router.queryParams.pipe().subscribe(queryParams=> {
      if (queryParams.addr != undefined) {
        this.address = queryParams.addr
        this.fetchAddressAndRender(queryParams.addr);
        setTimeout(()=> {
          this.fetchAddressTransactionsAndRender(queryParams.addr);
        },2000);
      }
      else {
        this.isFetching = false;
      }
    })
  }

  fetchAddressAndRender(addr:string) {
    this.blockchain.getBTCAddress(addr).pipe().subscribe(data=> {
      this.addressData = data;
      setTimeout(() => {
        this.isFetching = false;
      },1000);
    })
  }

  fetchAddressTransactionsAndRender(addr:string) {
    this.blockchain.getBTCAddressTransactions(addr).pipe().subscribe(data=> {
        this.addressTransactionsData = data;
        this.page = data.data && data.data.page ? parseInt(data.data.page) : this.page
        this.pagetotal = data.data && data.data.page_total ? parseInt(data.data.page_total) : this.pagetotal
    })
  }

  fetchMoreAddressTransactionsAndRender() { 
    if (!this.isFetching) { 
      this.page += 1;
      this.isFetching = true;
      this.blockchain.getBTCAddressTransactions(this.address, this.page, this.pagesize).pipe().subscribe(response=> {
        if (response.data && response.data.list) {
          this.addressTransactionsData.data.list = this.addressTransactionsData.data.list.concat(response.data.list);
        }
        this.isFetching = false;
      })
    }
  }

  getDate(time:number) {
    return (new Date(time * 1000)).toString();
  }

}
