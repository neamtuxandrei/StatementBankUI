import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/accounts.service';
import { Account } from '../models/Account';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent implements OnInit {
  accounts: Account[] = [];
  public accountWithTransactions: Account | null = null;
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe({
      next: (response) => {
        this.accounts = response;
        console.log(this.accounts);
      },
    });
  }
  public toggleTransactions(account: Account): void {
    if (this.accountWithTransactions === account) {
      this.accountWithTransactions = null;
    } else {
      this.accountWithTransactions = account;
    }
  }
}
