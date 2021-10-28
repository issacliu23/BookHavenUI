import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent implements OnInit {
  state$: Observable<any>;
  constructor(public activatedRoute: ActivatedRoute) { }
  pdfSrc = "";

  ngOnInit(): void {
    this.state$ = this.activatedRoute.paramMap.pipe(map(() => window.history.state));
    this.state$.subscribe(data => {
      this.pdfSrc = data.fileUrl;
    });
  
  }

}
