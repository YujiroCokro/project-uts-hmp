import { Component, OnInit } from '@angular/core';
import { Produk } from '../services/produk';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  standalone: false,
})
export class ProdukPage implements OnInit {

  products: any[] = [];
  keyword: string = '';
  defaultImage: string = 'https://ubaya.cloud/no_image.jpg';

  constructor(private produkservice: Produk) { }

  ngOnInit() {
    this.products = this.produkservice.products;
  }

  filterProduk() {
    this.products = this.produkservice.cariProduk(this.keyword);
  }

}
