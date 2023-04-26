import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  public chkPrime(num : number){

        for(var i = 2 ; i <= num /2 ; i++ ){

          if(num % 2 == 0) {

            return num + "  is not a prime number"
          }
        }
        return num + " is prime number "
  }
  
}
