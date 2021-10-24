import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AppUser } from 'src/app/core/models/user.model';
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
  email: string | null;
  constructor(private router: Router, private utilService: UtilService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    if(this.utilService.getToken()) {
      this.email = this.utilService.getSessionItem('username');
    }
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
