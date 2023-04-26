import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  public nResult :any 
  public sResult : number = 0 

  constructor(public nobj : NumberService , public sobj : StringService){

  }

  ngOnInit(){
      this.nResult = this.nobj.chkPrime(80)
      this.sResult = this.sobj.countCapital("InFoSysTem")
  }

}
