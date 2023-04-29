import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public bookArray : String[] = new Array("Angular Up & Running " , "BigData and Artificial Intelligence","Blockchain ArtificialIntelligence")

}
