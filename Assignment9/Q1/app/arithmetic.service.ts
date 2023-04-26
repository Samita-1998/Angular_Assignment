import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  public add( num1 : number , num2 : number){

    return num1 + num2

  }

  public subtract(num1 : number , num2 : number){

    return num1 - num2

  }
}
