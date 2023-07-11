import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  isValidEmail(email:string):boolean {
    return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
  }

  isValidUsername(username:string):boolean {
    return (
      username.length >= 3 &&
      username.length <= 20 &&
      /^[a-zA-Z0-9\.\_]*$/.test(username)
    )
  }

  isValidPassword(password:string):boolean {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)
  }

  doesPasswordHaveMinLength(password:string):boolean {
    return /^.{8,}$/.test(password)
  }

  doesPasswordHaveLetter(password:string):boolean {
    return /(?=.*?[a-z])/.test(password)
  }

  doesPasswordHaveUppercase(password:string):boolean {
    return /(?=.*?[A-Z])/.test(password)
  }

  doesPasswordHaveSpecialChar(password:string):boolean {
    return /(?=.*?[#?!@$%^&*-])/.test(password)
  }

  doesPasswordHaveDigit(password:string):boolean {
    return /(?=.*?[0-9])/.test(password)
  }
}
