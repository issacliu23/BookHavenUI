import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDTO } from 'src/app/core/models/bookdto.model';
import { MockDataService } from 'src/app/mockdata/mockdata.service';
import { GenreEnum, GenreList } from 'src/app/core/constants/enum';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Chapter } from 'src/app/core/models/chapter.model';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, AfterViewInit  {
  bookId: string | null;
  book: BookDTO;

  pageSize: number = 10;
  headingsToDisplay = ['No.', 'Chapter Title', 'Uploaded Date']
  columnsToDisplay = ['chapterNo', 'chapterTitle', 'createdDate']
  tableData: MatTableDataSource<Chapter>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private mockDataService: MockDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('id');

    if(this.bookId !== null) {
      this.book = this.mockDataService.getMockBookById(this.bookId);
      this.book.chapterList.sort((a, b) => b.chapterNo - a.chapterNo)
      this.tableData = new MatTableDataSource<Chapter>(this.book.chapterList);
    }
  }

  ngAfterViewInit() {
    this.tableData.paginator = this.paginator;
  }

  getGenreDetail(genre: GenreEnum) {
    return GenreList.find(g => g.value === genre);
  }

}
