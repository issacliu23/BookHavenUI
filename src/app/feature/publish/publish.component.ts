import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenreEnum, GenreList } from 'src/app/core/constants/enum';
import { Book } from 'src/app/core/models/book.model';
import { BookService } from 'src/app/http-services/book.service';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {
  publishForm: FormGroup;
  genreList = GenreList;
  imageUrl: any;
  coverImage: File;
  constructor(private formBuilder: FormBuilder, private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() { 
    this.publishForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      genre1: new FormControl('', [Validators.required]),
      genre2: new FormControl(),
      summary: new FormControl('', [Validators.required])
    });
  }
  onFileChanged(event:any) {
    const files = event.target.files;
    if (files.length === 0)
        return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
        return;
    }

    const reader = new FileReader();
    // this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
        this.imageUrl = reader.result; 
    }
    this.coverImage = event.target.files[0];

}
  submitForm() {
    // put service method here;
    let book: Book = new Book();
    if(this.genre1?.value !== null) {
      book.genreList.push(GenreEnum[this.genre1?.value]);
    }

    if(this.genre2?.value !== null) {
      book.genreList.push(GenreEnum[this.genre2?.value]);
    }

    book.bookTitle = this.title?.value;
    book.summary = this.summary?.value;
    book.pointsRequiredForChapter = 5;
    book.authorName = "Issac";
    this.bookService.publishBook(book, this.coverImage).subscribe(data => {
      if(data.bookId) {
        this.router.navigate(["/"]);
      }
      else {
        //TODO error handling
      }
    });
  }


  
  get summary() {
    return this.publishForm.get('summary');
  }
  get title() {
    return this.publishForm.get('title');
  }
  get genre1() {
    return this.publishForm.get('genre1');
  }
  get genre2() {
    return this.publishForm.get('genre2');
  }

}
