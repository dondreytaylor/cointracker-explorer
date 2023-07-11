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