import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookhavenui';
}


