import { Component, Input, OnInit } from '@angular/core';
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


}
