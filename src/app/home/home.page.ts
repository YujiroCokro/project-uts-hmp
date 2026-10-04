import { Component, OnInit } from '@angular/core';
import { Produk } from '../services/produk';
import { Transaksi } from '../services/transaksi';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  totalProduk: number = 0;
  totalTransaksi: number = 0;
  produkTerlaris: string = '';

  constructor(
    private produkservice: Produk,
    private transaksiservice: Transaksi
  ) { }

  ngOnInit() {
    this.totalProduk = this.produkservice.jumlahProduk();
    this.totalTransaksi = this.transaksiservice.jumlahTransaksi();
    this.produkTerlaris = this.transaksiservice.produkTerlaris();
  }

}
