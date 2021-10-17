import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BookDTO } from 'src/app/core/models/bookdto.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() book: BookDTO;

  getCoverImage(coverImage: any) {
    let data = "data:image/jpg;base64,"; 
    return data+coverImage.data;
  }

 

}
