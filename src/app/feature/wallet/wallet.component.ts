import { Component, OnInit } from '@angular/core';
import { TransactionHistory } from 'src/app/core/models/transactionHistory';
import { Wallet } from 'src/app/core/models/wallet.model';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  wallet: Wallet = new Wallet();
  tableData: TransactionHistory[];
  constructor() { }

  ngOnInit(): void {
    this.wallet.currentPoints = 100;
  }

  topUpWallet(): void {}
  withdrawWallet(): void {}

}
