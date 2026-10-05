import { Component, OnInit } from '@angular/core';
import { Keranjang } from '../services/keranjang';
import { Transaksi } from '../services/transaksi';
import { Router } from '@angular/router';

@Component({
  selector: 'app-keranjang',
  templateUrl: './keranjang.page.html',
  styleUrls: ['./keranjang.page.scss'],
  standalone: false
})
export class KeranjangPage implements OnInit {
  itemsKeranjang: any[] = [];

  constructor(
    public keranjangService: Keranjang,
    public transaksiService: Transaksi,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadKeranjang();
  }

  ionViewWillEnter() {
    this.loadKeranjang();
  }

  loadKeranjang() {
    this.itemsKeranjang = this.keranjangService.items;
  }

  hitungTotal(): number {
    let total = 0;
    for (let item of this.itemsKeranjang) {
      total += item.hargaJual;
    }
    return total;
  }

  hapusItem(i: number) {
    this.keranjangService.hapusItem(i);
  }

  konfirmasiTransaksi() {
    if (this.itemsKeranjang.length === 0) {
      alert('Keranjang masih kosong!');
      return;
    }

    const transaksiBaru = {
      tanggal: new Date(),
      items: [...this.itemsKeranjang],
      total: this.hitungTotal()
    };

    this.transaksiService.tambahTransaksi(transaksiBaru);
    this.keranjangService.items = [];
    this.itemsKeranjang = [];

    alert('Transaksi berhasil dikonfirmasi!');
    this.router.navigate(['/transaksi']);
  }
}