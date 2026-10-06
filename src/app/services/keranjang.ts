import { Service } from '@angular/core';

@Service()
export class Keranjang {
  items: any[] = [];

  tambahKeranjang(produk: any) {
    var jumlah = 0;
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].id == produk.id) jumlah++;
    }
    if (jumlah >= produk.stok) return false;

    this.items.push(produk);
    return true;
  }

  hapusItem(i: number) {
    this.items.splice(i, 1);
  }
}