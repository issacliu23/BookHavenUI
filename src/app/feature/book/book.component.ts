import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookDTO } from 'src/app/core/models/bookdto.model';
import { MockDataService } from 'src/app/mockdata/mockdata.service';
import { GenreEnum, GenreList } from 'src/app/core/constants/enum';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Chapter } from 'src/app/core/models/chapter.model';
import { BookService } from 'src/app/http-services/book.service';
import { UtilService } from 'src/app/services/util.service';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { WalletService } from 'src/app/http-services/wallet.service';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { PaymentService } from 'src/app/http-services/payment.service';
import { ChapterService } from 'src/app/http-services/chapter.service';
import { EventService } from 'src/app/services/event.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit  {
  bookId: string | null;
  book: BookDTO;


  pageSize: number = 10;
  headingsToDisplay = ['', 'No.', 'Chapter Title', 'Uploaded Date', 'Coins Required']
  columnsToDisplay = ['isLocked','chapterNo', 'chapterTitle', 'createdDate', 'pointsRequiredForChapter']
  tableData: MatTableDataSource<Chapter>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router:Router, private eventService: EventService, private chapterService: ChapterService, private paymentService: PaymentService, private walletService: WalletService, private utilService: UtilService, private mockDataService: MockDataService, private bookService:BookService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.bookId = this.route.snapshot.paramMap.get('id');
    if(this.bookId !== null) {
      // this.book = this.mockDataService.getMockBookById(this.bookId);
      this.bookService.getBookById(this.bookId).subscribe(data => {
        this.book = data;
        this.book.chapterList.sort((a, b) => b.chapterNo - a.chapterNo)
        this.tableData = new MatTableDataSource<Chapter>(this.book.chapterList);
        this.tableData.paginator = this.paginator;
      })
    }
  }



  getGenreDetail(genre: any) {
    return GenreList.find(g => g.label === genre);
  }

  getCoverImage(coverImage: any) {
    let data = "data:image/jpg;base64,"; 
    return data+coverImage.data;
  }

  getChapter(chapter: Chapter) {
    if(chapter.chapterNo <= 3 || !chapter.isLocked) {
      this.chapterService.getChapterById(chapter.chapterId).subscribe(res => {
        var file = new Blob([res], { type: 'application/pdf' }); 
        var fileURL = URL.createObjectURL(file);
        this.router.navigateByUrl('/view/chapter', { state: { fileUrl: fileURL }});
      });
      // call api retrieve content
    } 
    else {
      if(this.utilService.getToken()) {
        this.walletService.getWallet().subscribe(wallet => {
          if(wallet.currentPoints >= this.book.pointsRequiredForChapter) { // can buy
            this.confirmPurchase(chapter);
          }
          else { // cannot buy
            alert("Insufficient points, please top-up your wallet before purchasing the chapter");
          }
        })
      }
      else {
        alert("Please login first before purchasing any chapters");
        this.utilService.openDialog(LoginDialogComponent);
      }
      
    }
  }
  confirmPurchase(chapter:Chapter) {
    this.utilService.openDialog(DialogComponent).afterClosed().subscribe(data=>{
      if(data === "CONFIRM") {
        this.purchaseChapter(chapter);
      }
    })
  }

  purchaseChapter(chapter:Chapter) {
    this.paymentService.purchaseChapter(chapter).subscribe(data => {
      if(data.chapterPurchaseId) {
        alert("Chapter has successfully purchased");
        this.eventService.sendUpdate("");
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(['/book/'+this.bookId]));
      }
    });
  }


}
