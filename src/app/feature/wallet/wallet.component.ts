import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TransactionTypeEnum, TransactionTypeList } from 'src/app/core/constants/enum';
import { TransactionHistory } from 'src/app/core/models/transactionHistory';
import { Wallet } from 'src/app/core/models/wallet.model';
import { WalletService } from 'src/app/http-services/wallet.service';
import { MockDataService } from 'src/app/mockdata/mockdata.service';
import { UtilService } from 'src/app/services/util.service';
import { WalletDialogComponent } from './wallet-dialog/wallet-dialog.component';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  wallet: Wallet = new Wallet();
  transactionHistories: TransactionHistory[];
  headingsToDisplay = ['Transaction Date','Points Involved','Cash Involved', 'Action'];
  columnsToDisplay = ['createdDate', 'pointsInvolved', 'cashInvolved', 'transactionType'];

  tableData: MatTableDataSource<TransactionHistory>;
  pageSize = 10;
  constructor(private mockDataService: MockDataService, private utilService: UtilService, private walletService: WalletService) { }

  ngOnInit(): void {
    this.walletService.getWallet().subscribe(data => {
      if(data) {
        this.wallet = data;
      }
    })
    this.transactionHistories = this.mockDataService.getMockTransactionHistoryData();
    this.tableData = new MatTableDataSource<TransactionHistory>(this.transactionHistories);

  }

  ngAfterViewInit() {
    this.tableData.paginator = this.paginator;
  }

  topUpWallet(): void {
    this.utilService.openDialog(WalletDialogComponent,'auto',true);
  }
  withdrawWallet(): void {
    this.utilService.openDialog(WalletDialogComponent,'auto',false);
  }
  displayTransactionTypeLabel(transactionType: TransactionTypeEnum): string {
    let label: string|undefined = TransactionTypeList.find(s => s.value === transactionType)?.label;
    if(label !== undefined) {
      return label;
    }
    else {
      return "undefined";
    }
  }
}
