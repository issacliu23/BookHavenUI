import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Wallet } from 'src/app/core/models/wallet.model';
import { WalletService } from 'src/app/http-services/wallet.service';
import { EventService } from 'src/app/services/event.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-wallet-dialog',
  templateUrl: './wallet-dialog.component.html',
  styleUrls: ['./wallet-dialog.component.scss']
})
export class WalletDialogComponent implements OnInit {
  labelText: string;
  form: FormGroup;

  constructor(private utilService: UtilService, private eventService:EventService, private formBuilder:FormBuilder, private router: Router, @Inject(MAT_DIALOG_DATA) public isTopUp: any, private walletService: WalletService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      amount: ['', [Validators.required]]
    });
    if(this.isTopUp) {
      this.labelText = "TOP UP";
    }
    else {
      this.labelText = "WITHDRAW";
    }
  }

  confirm() {
    let points =  this.form.get('amount')?.value;
    if(points > 0) {
      if(this.isTopUp) {
        this.walletService.topUpWallet(points).subscribe({
          next: (value: Wallet) => {
            if(value) {
              this.eventService.sendUpdate("");
              this.utilService.closeDialog();
              this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
              this.router.navigate(['/wallet']));
            }
          },
          error: (err: any) => { alert("Please enter a valid input"); }
        });
      }
      else {
        this.walletService.withdrawWallet(points).subscribe({
          next: (value: Wallet) => {
            if(value) {
              this.eventService.sendUpdate("");
              this.utilService.closeDialog();
              this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
              this.router.navigate(['/wallet']));
            }
          },
          error: (err: any) => { alert("Please enter a valid input"); }
        });
      }
    }
  }
}

