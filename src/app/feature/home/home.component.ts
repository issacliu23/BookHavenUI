import { Component, OnInit } from '@angular/core';
import { ChildActivationStart } from '@angular/router';
import { BookDTO } from 'src/app/core/models/bookdto.model';
import { BookService } from 'src/app/http-services/book.service';
import { MockDataService } from 'src/app/mockdata/mockdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books: BookDTO[] = [];

  constructor(private mockDataService: MockDataService, private bookService: BookService) { }

  ngOnInit(): void {
    // this.books = this.mockDataService.getMockBooks();
    this.bookService.getAllBooks().subscribe((data: BookDTO[]) => {
      if(data) {
        this.books = data;
      }
    });
  }

}
