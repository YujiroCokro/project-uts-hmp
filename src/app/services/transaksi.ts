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

        const hitung: any = {};
        for (const t of this.transactions) {
            for (const item of t.items) {
                hitung[item.nama] = (hitung[item.nama] || 0) + 1;
            }
        }

        let terlaris = '';
        let max = 0;
        for (const nama in hitung) {
            if (hitung[nama] > max) {
                max = hitung[nama];
                terlaris = nama;
            }
        }
        return terlaris + ' (' + max + ' terjual)';
    }
}
