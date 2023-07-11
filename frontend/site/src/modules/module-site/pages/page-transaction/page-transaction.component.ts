import { Component, OnInit } from '@angular/core';
import * as services from '../../../module-shared/services/services.barrel'
import { ActivatedRoute } from '@angular/router';
import { BTCUnits } from '../../../module-shared/constants/BTCUnits'
import { BTCTransactionData } from '../../../module-shared/constants/BTCTransactionData'

@Component({
  selector: 'app-page-transaction',
  templateUrl: './page-transaction.component.html',
  styleUrls: ['./page-transaction.component.scss']
})
export class PageTransactionComponent implements OnInit {

  isFetching:boolean = true; 
  BTCUnits = BTCUnits
  BTCTransactionData = BTCTransactionData

  transactionData:any = {}
  // transactionData:any = BTCTransactionData.Transactions["3c2b594017776a8f277c5c021564c2302cb4ecbb2997d257b2c916e01e5f4b24"];
  
  constructor(private blockchain:services.BlockchainCOM, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.isFetching = true;
    this.router.queryParams.pipe().subscribe(queryParams=> {
      if (queryParams.tx != undefined) {
        this.blockchain.getBTCTransaction(queryParams.tx).pipe().subscribe(data=> {
           this.transactionData = data;
            setTimeout(() => {
              this.isFetching = false;
            },1000);
        })
      }
      else {
        this.isFetching = false;
      }
    })
  }

  getDate(time:number) {
    return (new Date(time * 1000)).toString();
  }

}