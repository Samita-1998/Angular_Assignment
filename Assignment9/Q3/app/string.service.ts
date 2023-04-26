import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  public cnt = 0

  public countCapital(inputtext : string ) {

   for(var i = 0 ; i<= inputtext.length ; i++) {
    if(inputtext.charAt(i) >= 'A' && inputtext.charAt(i) <= 'Z') {
      this.cnt++
    }
   }
   return this.cnt
}
}
