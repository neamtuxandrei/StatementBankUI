import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../models/Account';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private apiUrl = 'https://localhost:7208/api/accounts';
  constructor(private http: HttpClient) {}

  getAccounts() {
    return this.http.get<Account[]>(this.apiUrl);
  }
}
