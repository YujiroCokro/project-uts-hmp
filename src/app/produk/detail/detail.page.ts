import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produk } from '../../services/produk';
import { Keranjang } from '../../services/keranjang';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: false,
})
export class DetailPage implements OnInit {

  id = 0;
  products: any[] = [];

  constructor(
    private route:ActivatedRoute,
    private produkService:Produk,
    private keranjangService:Keranjang
  ) { }

  ngOnInit() {
    this.products = this.produkService.products;

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  tambahKeranjang() {
    this.keranjangService.tambahKeranjang(this.products[this.id]);
  }
}
