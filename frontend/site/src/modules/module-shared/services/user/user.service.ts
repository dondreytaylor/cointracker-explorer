import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as models from '../../models/models.barrel'
import { environment } from '../../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<models.User>(new models.User())
  user = this.userSubject.asObservable()

  constructor(private http:HttpClient) {
      this.get()
  }

  get(): Observable<{user:any}> {
    let obs = this.http.get<{user:any}>(`${environment.api.gateway.endpoint}/api/v1/core/user`)
    obs.subscribe(
      res => {
          this.userSubject.next(new models.User(res))
      },
      err => {
          this.userSubject.next(new models.User())
      }
    )
    return obs
  }

  save(user:models.User): Observable<models.User> {
    let obs = this.http.put<models.User>(`${environment.api.gateway.endpoint}/api/v1/core/user`, user.propsUpdated)
    obs.subscribe(res => {
        this.userSubject.next(user)
    })
    return obs
  }

  add(userData:any): Observable<any> {
    let obs = this.http.post<any>(`${environment.api.gateway.endpoint}/api/v1/core/user/add`, {user: userData})
    return obs
  }

  search(query:string = ''): Observable<{users:any[]}> {
    let obs = this.http.get<any>(`${environment.api.gateway.endpoint}/api/v1/core/user/search`, {params:{query}})
    return obs
  }

  getUsernameAvailability(username:string): Observable<any> {
    let obs = this.http.get<any>(`${environment.api.gateway.endpoint}/api/v1/exists/username`, {params: {username: username}})
    return obs
  }

  checkUsernameAvailability(username:string): Observable<any> {
    let obs = this.http.get<any>(`${environment.api.gateway.endpoint}/api/v1/user/username/check?username=${username}`)
    return obs
  }

  getEmailAvailability(email:string): Observable<any> {
    let obs = this.http.get<any>(`${environment.api.gateway.endpoint}/api/v1/exists/email`, {params: {email: email}})
    return obs
  }

  isEmailVerified(email:string): Observable<any> {
    let obs = this.http.get<any>(`${environment.api.gateway.endpoint}/api/v1/user/email/verified`, {params: {email: email}})
    return obs
  }

  isPhoneNumberVerified(phonenumber:string): Observable<any> {
    let obs = this.http.get<any>(`${environment.api.gateway.endpoint}/api/v1/user/phonenumber/verified`, {params: {phonenumber: phonenumber}})
    return obs
  }

  sendPhoneNumberCode(country:string, calling_code:string, phone_number:string): Observable<any> {
    let obs = this.http.post<any>(`${environment.api.gateway.endpoint}/api/v1/user/sendphoneverificationcode`, {country, calling_code, phone_number})
    return obs
  }

  verifyPhoneNumberCode(country:string, calling_code:string, phone_number:string, verification_code:string): Observable<any> {
    let obs = this.http.post<any>(`${environment.api.gateway.endpoint}/api/v1/user/verifyphoneverificationcode`, {country, calling_code, phone_number, verification_code})
    return obs
  }

  sendAuthPhoneCode(country:string, country_calling_code:string, phone:string, phone_national:string): Observable<any> {
    let obs = this.http.post<any>(`${environment.api.gateway.endpoint}/api/v1/user/phone/verification/code`, {phonenumber: {country, country_calling_code, phone, phone_national}})
    return obs
  }

  verifyAuthPhoneCode(country:string, country_calling_code:string, phone:string, phone_national:string, verification_code:string): Observable<any> {
    let obs = this.http.post<any>(`${environment.api.gateway.endpoint}/api/v1/user/phone/verification/code/verify`, {phonenumber: {country, country_calling_code, phone, phone_national}, verification_code})
    return obs
  }

  confirmEmail(email:string): Observable<any> {
    let obs = this.http.post<any>(`${environment.api.gateway.endpoint}/api/v1/user/email/confirm`, {email})
    return obs
  }

  applyEmail(email:string, token:string, code:string): Observable<any> {
    let obs = this.http.post<any>(`${environment.api.gateway.endpoint}/api/v1/user/email/apply`, {email, token, code})
    return obs
  }

  applyUsername(username:string): Observable<any> {
    let obs = this.http.post<any>(`${environment.api.gateway.endpoint}/api/v1/user/username/apply`, {username})
    return obs
  }

  changePassword(password_current:string, password_new:string): Observable<any> {
    let obs = this.http.post<any>(`${environment.api.gateway.endpoint}/api/v1/user/change/password`, {password_current, password_new})
    return obs
  }

  forgotPassword(email:string): Observable<any> {
    let obs = this.http.post<any>(`${environment.api.gateway.endpoint}/api/v1/user/forgot/password`, {email: email})
    return obs
  }
  
  forgotPasswordConfirm(email:string, type:string): Observable<any> {
    let obs = this.http.post<any>(`${environment.api.gateway.endpoint}/api/v1/user/forgot/password/confirm`, {email, type})
    return obs
  }

  forgotPasswordToken(email:string, token:string, code:string): Observable<any> {
    let obs = this.http.post<any>(`${environment.api.gateway.endpoint}/api/v1/user/forgot/password/token`, {email, token, code})
    return obs
  }

  forgotPasswordApply(email:string, password_token:string, password_new:string): Observable<any> {
    let obs = this.http.post<any>(`${environment.api.gateway.endpoint}/api/v1/user/forgot/password/apply`, {email, password_token, password_new})
    return obs
  }

  forgotUsername(email:string): Observable<any> {
    let obs = this.http.post<any>(`${environment.api.gateway.endpoint}/api/v1/user/forgot/username`, {email})
    return obs
  }

  forgotUsernameConfirm(email:string, type:string): Observable<any> {
    let obs = this.http.post<any>(`${environment.api.gateway.endpoint}/api/v1/user/forgot/username/confirm`, {email, type})
    return obs
  }

  forgotUsernameToken(email:string, token:string, code:string): Observable<any> {
    let obs = this.http.post<any>(`${environment.api.gateway.endpoint}/api/v1/user/forgot/username/token`, {email, token, code})
    return obs
  }

  forgotUsernameReveal(email:string, username_token:string): Observable<any> {
    let obs = this.http.post<any>(`${environment.api.gateway.endpoint}/api/v1/user/forgot/username/reveal`, {email, username_token})
    return obs
  }

  setup2FA(): Observable<any> {
    let obs = this.http.post<any>(`${environment.api.gateway.endpoint}/auth/2fa`, {})
    return obs
  }

  verify2FA(token:string, code:string): Observable<any> {
    let obs = this.http.post<any>(`${environment.api.gateway.endpoint}/auth/2fa/verify`, {token, code})
    return obs
  }

  verify2FASetup(code:string): Observable<any> {
    let obs = this.http.post<any>(`${environment.api.gateway.endpoint}/auth/2fa/verify/setup`, {code})
    return obs
  }

  verify2SA(token:string, code:string): Observable<any> {
    let obs = this.http.post<any>(`${environment.api.gateway.endpoint}/auth/2sa/verify`, {token, code})
    return obs
  }

}
