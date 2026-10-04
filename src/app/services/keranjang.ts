import { Service } from '@angular/core';

@Service()
export class Keranjang {
    items: any[] = [];
    
    tambahKeranjang(produk: any) {
    this.items.push(produk);
  }

}
