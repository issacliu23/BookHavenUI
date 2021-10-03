import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDialogComponent } from 'src/app/feature/login-dialog/login-dialog.component';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private utilService: UtilService) { }

  ngOnInit(): void {
  }

  openLoginDialog() {
    this.utilService.openDialog(LoginDialogComponent);
  }

}
