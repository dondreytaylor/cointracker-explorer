import { Component, OnInit } from '@angular/core';
import * as services from '../../../module-shared/services/services.barrel'

@Component({
  selector: 'app-page-address',
  templateUrl: './page-address.component.html',
  styleUrls: ['./page-address.component.scss']
})
export class PageAddressComponent implements OnInit {

  constructor(private blockchain:services.BlockchainCOM) { }

  ngOnInit(): void {
    this.blockchain.getBTCAddress("1FwYmGEjXhMtxpWDpUXwLx7ndLNfFQncKq").pipe().subscribe(data=> {
      console.log(data); 
    })
  }

}
