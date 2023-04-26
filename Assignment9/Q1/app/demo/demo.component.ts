import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
public addResult : any 
public subResult : any 
  
constructor(public obj : ArithmeticService){

  }

  ngOnInit() : void {

    this.addResult= this.obj.add(12,15)
   
    this.subResult = this.obj.subtract(15,7)
  }

  

}
