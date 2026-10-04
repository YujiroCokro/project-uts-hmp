import { Service } from '@angular/core';

@Service()
export class Transaksi {
    transactions: any[] = [];
    
    tambahTransaksi(transaksi: any) {
    this.transactions.push(transaksi);
  }
}
