import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { LoginDialogComponent } from 'src/app/feature/login-dialog/login-dialog.component';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  dialogRef: MatDialogRef<any>;
  routerSubscription: Subscription;
  constructor(private router: Router, private utilService: UtilService) { }

  ngOnInit(): void {
    this.routerSubscription = this.router.events
      .pipe(
        filter((event) => event instanceof NavigationStart),
        filter(() => !!this.dialogRef)
      )
      .subscribe(() => {
        this.dialogRef.close();
      });
 }

 ngOnDestroy() {
   this.routerSubscription.unsubscribe();
 }

  openLoginDialog() {
    this.dialogRef = this.utilService.openDialog(LoginDialogComponent);
  }

  

}
