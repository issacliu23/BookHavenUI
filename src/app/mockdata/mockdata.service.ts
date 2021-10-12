import { Injectable } from "@angular/core";
import { GenreEnum, TransactionTypeEnum } from "../core/constants/enum";
import { BookDTO } from "../core/models/bookdto.model";
import { Chapter } from "../core/models/chapter.model";
import { TransactionHistory } from "../core/models/transactionHistory";

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() { }

  getMockBookById(id: string): BookDTO {
    let books: BookDTO[] = this.getMockBooks();
    let book = books.find(b => b.bookId === id);
    if(book !== undefined) {
      return book;
    }
    else {
      return new BookDTO();
    }
  }

  getMockBooks(): BookDTO[] {
    let authorName = "Haruki Murakami";
    let books: BookDTO[] = [];
    let book1: BookDTO = new BookDTO();
    book1.genreList = [];

    book1.bookId = "1";
    book1.bookTitle = "1Q84";
    book1.review = 4.9;
    book1.authorName = authorName;
    book1.updatedDate = new Date(); 
    book1.coverImage = "/assets/mockimages/1q84.jpg";
    book1.summary="The year is 1984 and the city is Tokyo. A young woman named Aomame follows a taxi driver’s enigmatic suggestion and begins to notice puzzling discrepancies in the world around her. She has entered, she realizes, a parallel existence, which she calls 1Q84 “Q is for ‘question mark.’ A world that bears a question.” Meanwhile, an aspiring writer named Tengo takes on a suspect ghostwriting project. He becomes so wrapped up with the work and its unusual author that, soon, his previously placid life begins to come unraveled."
    book1.genreList.push(GenreEnum.Comedy, GenreEnum.Fantasy, GenreEnum.Romance, GenreEnum.Thriller);
    book1.chapterList = this.getMockChapters();
    // book1.summary = book1.summary + "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi etiam dignissim diam quis enim. Urna condimentum mattis pellentesque id. Sed viverra ipsum nunc aliquet bibendum enim. Eget velit aliquet sagittis id consectetur purus. Dui ut ornare lectus sit. Tortor dignissim convallis aenean et. Viverra adipiscing at in tellus integer feugiat scelerisque. Commodo odio aenean sed adipiscing diam donec. Ultrices dui sapien eget mi proin sed libero enim sed. Commodo quis imperdiet massa tincidunt. Nulla porttitor massa id neque. Purus in mollis nunc sed id semper risus. Nunc consequat interdum varius sit amet mattis. Sed id semper risus in hendrerit gravida rutrum quisque non.Tortor aliquam nulla facilisi cras fermentum odio eu. Bibendum enim facilisis gravida neque. A diam maecenas sed enim ut sem viverra aliquet. Leo integer malesuada nunc vel. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Libero id faucibus nisl tincidunt eget nullam. Condimentum id venenatis a condimentum vitae sapien. Dictum non consectetur a erat nam at. Aliquet lectus proin nibh nisl condimentum. Iaculis nunc sed augue lacus viverra. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Nascetur ridiculus mus mauris vitae. Sed cras ornare arcu dui vivamus. At augue eget arcu dictum varius duis at consectetur lorem. Libero justo laoreet sit amet cursus sit amet dictum sit.Dui sapien eget mi proin sed libero enim. Consectetur purus ut faucibus pulvinar elementum integer enim. Sollicitudin aliquam ultrices sagittis orci a. Viverra aliquet eget sit amet tellus cras adipiscing enim. Amet nisl purus in mollis nunc sed id. Urna condimentum mattis pellentesque id nibh tortor. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Diam phasellus vestibulum lorem sed. Neque sodales ut etiam sit amet. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam.Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Eu sem integer vitae justo eget magna. Quam quisque id diam vel quam elementum pulvinar etiam. Purus viverra accumsan in nisl nisi scelerisque eu ultrices. Tincidunt vitae semper quis lectus nulla at volutpat diam. Vitae ultricies leo integer malesuada nunc vel risus commodo. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Porta non pulvinar neque laoreet. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Libero volutpat sed cras ornare arcu. Sed odio morbi quis commodo odio aenean sed adipiscing. Elit ullamcorper dignissim cras tincidunt lobortis feugiat. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum.Viverra tellus in hac habitasse platea. Ut pharetra sit amet aliquam id diam maecenas ultricies. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Enim ut sem viverra aliquet eget. Volutpat diam ut venenatis tellus in metus. Et magnis dis parturient montes nascetur ridiculus mus mauris. Nunc lobortis mattis aliquam faucibus. Feugiat vivamus at augue eget arcu. Augue lacus viverra vitae congue eu. Adipiscing enim eu turpis egestas pretium. Lorem ipsum dolor sit amet consectetur adipiscing elit. Aenean euismod elementum nisi quis. Etiam tempor orci eu lobortis elementum.Pellentesque habitant morbi tristique senectus et netus. Massa enim nec dui nunc mattis enim. Ut diam quam nulla porttitor massa id neque aliquam. Non arcu risus quis varius quam quisque. Eget magna fermentum iaculis eu non diam. Mauris rhoncus aenean vel elit scelerisque mauris. Vivamus at augue eget arcu dictum. Scelerisque fermentum dui faucibus in ornare quam. Viverra adipiscing at in tellus. Quam viverra orci sagittis eu volutpat. Tempor orci dapibus ultrices in iaculis. Aliquet lectus proin nibh nisl. Feugiat nibh sed pulvinar proin gravida. Amet aliquam id diam maecenas. Viverra ipsum nunc aliquet bibendum enim facilisis. Sit amet facilisis magna etiam. Mauris a diam maecenas sed enim. Dignissim diam quis enim lobortis scelerisque. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Cras pulvinar mattis nunc sed blandit. Mauris ultrices eros in cursus turpis. Ultricies lacus sed turpis tincidunt id. Ultrices dui sapien eget mi proin sed libero. Donec ultrices tincidunt arcu non sodales neque sodales ut. Fringilla urna porttitor rhoncus dolor purus non. Eget nunc scelerisque viverra mauris in aliquam sem fringilla. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Euismod lacinia at quis risus sed vulputate odio ut enim. Sagittis purus sit amet volutpat consequat. Massa vitae tortor condimentum lacinia quis vel eros donec. Ac felis donec et odio pellentesque."
  
    let book2: BookDTO = new BookDTO();
    book2.bookId = "2";
    book2.bookTitle = "Norwegian Wood";
    book2.review = 4.0;
    book2.authorName = authorName;
    book2.updatedDate = new Date(); 
    book2.coverImage = "/assets/mockimages/norwegianwood.jpg";

    let book3: BookDTO = new BookDTO();
    book3.bookId = "3";
    book3.bookTitle = "The Wind-Up Bird";
    book3.review = 4.3;
    book3.authorName = authorName;
    book3.updatedDate = new Date(); 
    book3.coverImage = "/assets/mockimages/windupbird.jpg";


    let book4: BookDTO = new BookDTO();
    book4.bookId = "4";
    book4.bookTitle = "Killing Commendatore";
    book4.review = 3.6;
    book4.authorName = authorName;
    book4.updatedDate = new Date(); 
    book4.coverImage = "/assets/mockimages/killingcommendatore.jpg";

    let book5: BookDTO = new BookDTO();
    book5.bookId = "5";
    book5.bookTitle = "Men Without Women";
    book5.review = 4.9;
    book5.authorName = authorName;
    book5.updatedDate = new Date(); 
    book5.coverImage = "/assets/mockimages/menwithoutwomen.jpg";

    let book6: BookDTO = new BookDTO();
    book6.bookId = "6";
    book6.bookTitle = "Hear the wind sing";
    book6.review = 4.2;
    book6.authorName = authorName;
    book6.updatedDate = new Date(); 
    book6.coverImage = "/assets/mockimages/hearthewindsing.jpg";

    books.push(book1,book2,book3,book4,book5);

    return books;
  }

  getMockChapters(): Chapter[] {
    let chapters: Chapter[] = [];
    let chapter1 = new Chapter();
    chapter1.chapterId = "1";
    chapter1.chapterNo = 1;
    chapter1.chapterTitle = "Sunshine across the sea";
    chapter1.createdDate = new Date();

    let chapter2 = new Chapter();
    chapter2.chapterId = "2";
    chapter2.chapterNo = 2;
    chapter2.chapterTitle = "Seaweed chicken is delicious";
    chapter2.createdDate = new Date();
    chapter2.chapterTitle = chapter2.chapterTitle + "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi etiam dignissim diam quis enim. Urna condimentum mattis pellentesque id. Sed viverra ipsum nunc aliquet bibendum enim. Eget velit aliquet sagittis id consectetur purus. Dui ut ornare lectus sit. Tortor dignissim convallis aenean et. Viverra adipiscing at in tellus integer feugiat scelerisque. Commodo odio aenean sed adipiscing diam donec. Ultrices dui sapien eget mi proin sed libero enim sed. Commodo quis imperdiet massa tincidunt. Nulla porttitor massa id neque. Purus in mollis nunc sed id semper risus. Nunc consequat interdum varius sit amet mattis. Sed id semper risus in hendrerit gravida rutrum quisque non.Tortor aliquam nulla facilisi cras fermentum odio eu. Bibendum enim facilisis gravida neque. A diam maecenas sed enim ut sem viverra aliquet. Leo integer malesuada nunc vel. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Libero id faucibus nisl tincidunt eget nullam. Condimentum id venenatis a condimentum vitae sapien. Dictum non consectetur a erat nam at. Aliquet lectus proin nibh nisl condimentum. Iaculis nunc sed augue lacus viverra. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Nascetur ridiculus mus mauris vitae. Sed cras ornare arcu dui vivamus. At augue eget arcu dictum varius duis at consectetur lorem. Libero justo laoreet sit amet cursus sit amet dictum sit.Dui sapien eget mi proin sed libero enim. Consectetur purus ut faucibus pulvinar elementum integer enim. Sollicitudin aliquam ultrices sagittis orci a. Viverra aliquet eget sit amet tellus cras adipiscing enim. Amet nisl purus in mollis nunc sed id. Urna condimentum mattis pellentesque id nibh tortor. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Diam phasellus vestibulum lorem sed. Neque sodales ut etiam sit amet. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam.Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Eu sem integer vitae justo eget magna. Quam quisque id diam vel quam elementum pulvinar etiam. Purus viverra accumsan in nisl nisi scelerisque eu ultrices. Tincidunt vitae semper quis lectus nulla at volutpat diam. Vitae ultricies leo integer malesuada nunc vel risus commodo. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Porta non pulvinar neque laoreet. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Libero volutpat sed cras ornare arcu. Sed odio morbi quis commodo odio aenean sed adipiscing. Elit ullamcorper dignissim cras tincidunt lobortis feugiat. Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum.Viverra tellus in hac habitasse platea. Ut pharetra sit amet aliquam id diam maecenas ultricies. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Enim ut sem viverra aliquet eget. Volutpat diam ut venenatis tellus in metus. Et magnis dis parturient montes nascetur ridiculus mus mauris. Nunc lobortis mattis aliquam faucibus. Feugiat vivamus at augue eget arcu. Augue lacus viverra vitae congue eu. Adipiscing enim eu turpis egestas pretium. Lorem ipsum dolor sit amet consectetur adipiscing elit. Aenean euismod elementum nisi quis. Etiam tempor orci eu lobortis elementum.Pellentesque habitant morbi tristique senectus et netus. Massa enim nec dui nunc mattis enim. Ut diam quam nulla porttitor massa id neque aliquam. Non arcu risus quis varius quam quisque. Eget magna fermentum iaculis eu non diam. Mauris rhoncus aenean vel elit scelerisque mauris. Vivamus at augue eget arcu dictum. Scelerisque fermentum dui faucibus in ornare quam. Viverra adipiscing at in tellus. Quam viverra orci sagittis eu volutpat. Tempor orci dapibus ultrices in iaculis. Aliquet lectus proin nibh nisl. Feugiat nibh sed pulvinar proin gravida. Amet aliquam id diam maecenas. Viverra ipsum nunc aliquet bibendum enim facilisis. Sit amet facilisis magna etiam. Mauris a diam maecenas sed enim. Dignissim diam quis enim lobortis scelerisque. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Cras pulvinar mattis nunc sed blandit. Mauris ultrices eros in cursus turpis. Ultricies lacus sed turpis tincidunt id. Ultrices dui sapien eget mi proin sed libero. Donec ultrices tincidunt arcu non sodales neque sodales ut. Fringilla urna porttitor rhoncus dolor purus non. Eget nunc scelerisque viverra mauris in aliquam sem fringilla. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Euismod lacinia at quis risus sed vulputate odio ut enim. Sagittis purus sit amet volutpat consequat. Massa vitae tortor condimentum lacinia quis vel eros donec. Ac felis donec et odio pellentesque."
    chapters.push(chapter1, chapter2)
    for(let i=3; i<20; i++) {
      let chapter = new Chapter();
      chapter.chapterId = i +"";
      chapter.chapterNo = i;
      chapter.chapterTitle = "some title everyone likes";
      chapter.createdDate = new Date();
      chapters.push(chapter);
    }
    return chapters;
  }

  getMockTransactionHistoryData(): TransactionHistory[] {
    let transactions: TransactionHistory[] = [];
    let tx1: TransactionHistory = new TransactionHistory();
    tx1.transactionId = "1";
    tx1.cashInvolved = "10.00";
    tx1.pointsInvolved = 100;
    tx1.transactionType = TransactionTypeEnum.TopUpWallet
    tx1.createdDate = new Date();

    let tx2: TransactionHistory = new TransactionHistory();
    tx2.transactionId = "2";
    tx2.cashInvolved = "20.00";
    tx2.pointsInvolved = 200;
    tx2.transactionType = TransactionTypeEnum.TopUpWallet
    tx2.createdDate = new Date();

    let tx3: TransactionHistory = new TransactionHistory();
    tx3.transactionId = "3";
    tx3.cashInvolved = "-10.00";
    tx3.pointsInvolved = -100
    tx3.transactionType = TransactionTypeEnum.WithdrawFromWallet
    tx3.createdDate = new Date();
    
    let tx4: TransactionHistory = new TransactionHistory();
    tx4.transactionId = "4";
    tx4.cashInvolved = "0";
    tx4.pointsInvolved = -5
    tx4.transactionType = TransactionTypeEnum.PurchaseChapter
    tx4.createdDate = new Date();

    let tx5: TransactionHistory = new TransactionHistory();
    tx5.transactionId = "5";
    tx5.cashInvolved = "0";
    tx5.pointsInvolved = -5
    tx5.transactionType = TransactionTypeEnum.PurchaseChapter
    tx5.createdDate = new Date();

    transactions.push(tx1, tx2, tx3, tx4, tx5);
    return transactions;

  }

  


}
