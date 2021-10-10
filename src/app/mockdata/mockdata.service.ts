import { Injectable } from "@angular/core";
import { TransactionTypeEnum } from "../core/constants/enum";
import { BookDTO } from "../core/models/bookdto.model";
import { TransactionHistory } from "../core/models/transactionHistory";

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() { }



  getMockBooks(): BookDTO[] {
    let authorName = "Haruki Murakami";
    let books: BookDTO[] = [];
    let book1: BookDTO = new BookDTO();
    book1.bookTitle = "1Q84";
    book1.review = 5.0;
    book1.authorName = authorName;
    book1.updatedDate = new Date(); 
    book1.coverImage = "/assets/mockimages/1q84.jpg";

    let book2: BookDTO = new BookDTO();
    book2.bookTitle = "Norwegian Wood";
    book2.review = 4.0;
    book2.authorName = authorName;
    book2.updatedDate = new Date(); 
    book2.coverImage = "/assets/mockimages/norwegianwood.jpg";

    let book3: BookDTO = new BookDTO();
    book3.bookTitle = "The Wind-Up Bird";
    book3.review = 4.3;
    book3.authorName = authorName;
    book3.updatedDate = new Date(); 
    book3.coverImage = "/assets/mockimages/windupbird.jpg";


    let book4: BookDTO = new BookDTO();
    book4.bookTitle = "Killing Commendatore";
    book4.review = 3.6;
    book4.authorName = authorName;
    book4.updatedDate = new Date(); 
    book4.coverImage = "/assets/mockimages/killingcommendatore.jpg";

    let book5: BookDTO = new BookDTO();
    book5.bookTitle = "Men Without Women";
    book5.review = 4.9;
    book5.authorName = authorName;
    book5.updatedDate = new Date(); 
    book5.coverImage = "/assets/mockimages/menwithoutwomen.jpg";

    let book6: BookDTO = new BookDTO();
    book6.bookTitle = "Hear the wind sing";
    book6.review = 4.2;
    book6.authorName = authorName;
    book6.updatedDate = new Date(); 
    book6.coverImage = "/assets/mockimages/hearthewindsing.jpg";

    books.push(book1,book2,book3,book4,book5);

    return books;
  }

  getMockTransactionHistoryData(): TransactionHistory[] {
    let transactions: TransactionHistory[] = [];
    let tx1: TransactionHistory = new TransactionHistory();
    tx1.transactionId = "1";
    tx1.cashDeducted = "10.00";
    tx1.pointsAwarded = 100;
    tx1.pointsDeducted = 0
    tx1.transactionType = TransactionTypeEnum.TopUpWallet
    tx1.transactionDate = new Date();

    let tx2: TransactionHistory = new TransactionHistory();
    tx2.transactionId = "2";
    tx2.cashDeducted = "20.00";
    tx2.pointsAwarded = 200;
    tx2.pointsDeducted = 0
    tx1.transactionType = TransactionTypeEnum.TopUpWallet
    tx2.transactionDate = new Date();

    let tx3: TransactionHistory = new TransactionHistory();
    tx3.transactionId = "3";
    tx3.cashDeducted = "-10.00";
    tx3.pointsAwarded = 0;
    tx3.pointsDeducted = 100
    tx1.transactionType = TransactionTypeEnum.WithdrawFromWallet
    tx3.transactionDate = new Date();
    
    let tx4: TransactionHistory = new TransactionHistory();
    tx4.transactionId = "4";
    tx4.cashDeducted = "0";
    tx4.pointsAwarded = 0;
    tx4.pointsDeducted = 5
    tx1.transactionType = TransactionTypeEnum.PurchaseChapter
    tx4.transactionDate = new Date();

    let tx5: TransactionHistory = new TransactionHistory();
    tx5.transactionId = "5";
    tx5.cashDeducted = "0";
    tx5.pointsAwarded = 0;
    tx5.pointsDeducted = 5
    tx1.transactionType = TransactionTypeEnum.PurchaseChapter
    tx5.transactionDate = new Date();

    transactions.push(tx1, tx2, tx3, tx4, tx5);
    return transactions;

  }

  


}
