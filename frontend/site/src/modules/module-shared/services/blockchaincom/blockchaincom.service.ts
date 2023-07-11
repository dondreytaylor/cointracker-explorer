import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as models from '../../models/models.barrel'
import { environment } from '../../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlockchainCOM {

  constructor(private http:HttpClient) {
  }

  getBTCAddress(addr:string = ''): Observable<{addr:any}> {
    let obs = this.http.get<{addr:any}>(`${environment.api.gateway.endpoint}/v1/bitcoin/address`, {params:{addr}})
    return obs
  }

  getBTCTransaction(tx:string = ''): Observable<{tx:any}> {
    let obs = this.http.get<{tx:any}>(`${environment.api.gateway.endpoint}/v1/bitcoin/transaction`, {params:{tx}})
    return obs
  }

}
