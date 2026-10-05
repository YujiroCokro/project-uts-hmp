import { Injectable } from '@angular/core';

@Injectable(
  {providedIn: 'root'}
)

export class Keranjang {
    items: any[] = [];

    tambahKeranjang(produk: any) {
      this.items.push(produk);
    }
}
