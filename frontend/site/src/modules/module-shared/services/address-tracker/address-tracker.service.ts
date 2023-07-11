import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressTrackerService {

  constructor() { }

  // Instead of using the database, we'll use local storage due to 
  // time constraints of the project.
  addAddress(addr:string) {
    try {
      let data = JSON.parse(localStorage.getItem("addresses") || "{\"addresses\":[]}") as {addresses:string[]};
      data.addresses.push(addr);
      localStorage.setItem("addresses", JSON.stringify(data));
    }
    catch(e) { 
      console.log(e);
    }
  }

  // Retrieve tracked addresses, we'll use local storage due to 
  // time constraints of the project.
  getAddresses(): string[] {
    try {
      let data = JSON.parse(localStorage.getItem("addresses") || "{\"addresses\":[]}") as {addresses:string[]};
      return data.addresses
    }
    catch(e) { 
    }
    return [];
  }

  // Remove tracked address, we'll use local storage due to 
  // time constraints of the project.
  updateAddresses(addresses:string[]) {
    try {
      console.log(addresses);
      localStorage.setItem("addresses", JSON.stringify({addresses}));
    }
    catch(e) { 
      console.log(e);
    }
  }
}
