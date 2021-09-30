import { Component, OnInit } from '@angular/core';
import { BookDTO } from 'src/app/core/models/bookdto.model';
import { MockDataService } from 'src/app/mockdata/mockdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books: BookDTO[] = [];

  constructor(private mockDataService: MockDataService) { }

  ngOnInit(): void {
    this.books = this.mockDataService.getMockBooks();
  }

}
