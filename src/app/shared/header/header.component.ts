import { AfterViewChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AppUser } from 'src/app/core/models/user.model';
import { Wallet } from 'src/app/core/models/wallet.model';
import { LoginDialogComponent } from 'src/app/feature/login-dialog/login-dialog.component';
import { WalletService } from 'src/app/http-services/wallet.service';
import { EventService } from 'src/app/services/event.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  dialogRef: MatDialogRef<any>;
  routerSubscription: Subscription;
  eventSubscription: Subscription;
  email: string | null;
  walletPoints: number | null = null;

  constructor(private eventService: EventService, private walletService: WalletService, private router: Router, private utilService: UtilService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.walletService.getWallet().subscribe(wallet => {
      this.walletPoints = wallet.currentPoints;
    });
    this.eventSubscription = this.eventService.getUpdate().subscribe(data => {
      this.walletService.getWallet().subscribe(wallet => {
        this.walletPoints = wallet.currentPoints;
      })
    })
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
  console.log("destroy");

   this.routerSubscription.unsubscribe();
   this.eventSubscription.unsubscribe();
 }

  openLoginDialog() {
    this.dialogRef = this.utilService.openDialog(LoginDialogComponent);
  }

  

}
