import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GenreEnum, GenreList } from 'src/app/core/constants/enum';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {
  publishForm: FormGroup;
  genreList = GenreList;
  imageUrl: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.publishForm = this.formBuilder.group({
      coverImage: new FormControl('', [Validators.required]),
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
}
  submitForm() {
    // put service method here;
    console.log("submitted!");

  }

}
