import { Service } from '@angular/core';

@Service()
export class Transaksi {
    transactions: any[] = [];

    tambahTransaksi(transaksi: any) {
        this.transactions.push(transaksi);
    }
    jumlahTransaksi() {
        return this.transactions.length;
    }
    produkTerlaris(): string {
        if (this.transactions.length == 0) {
            return 'Belum ada transaksi';
        }

        return '';
    }
}
