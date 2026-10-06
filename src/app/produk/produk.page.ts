import { Component, OnInit} from '@angular/core';
import { Produk } from '../services/produk';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  standalone: false,
})
export class ProdukPage implements OnInit {

  keyword: string = '';
  defaultImage: string = 'assets/default.png';

  constructor(private produkservice: Produk) { }

  ngOnInit() {
    
  }
  refresh() {
    this.keyword = '';
  }

  cariProduk() {
    return this.produkservice.cariProduk(this.keyword);
  }

}
