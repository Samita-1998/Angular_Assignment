import { Component } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent {

public str = "MaRveLLous INfosYStem "

public upper() {

	 this.str = this.str.toUpperCase()
	console.log(this.str)
}

public lower() {
	
this.str = this.str.toLowerCase()
console.log(this.str)
}

}
