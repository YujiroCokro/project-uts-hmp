import { Service } from '@angular/core';

@Service()
export class Produk {
    products = [
        {
            id: 1,
            nama: 'Indomie Goreng',
            kategori: 'Makanan',
            hargaBeli: 2800,
            hargaJual: 3500,
            stok: 20,
            gambar: ''
        },
        {
            id: 2,
            nama: 'Aqua 600ml',
            kategori: 'Minuman',
            hargaBeli: 2500,
            hargaJual: 3500,
            stok: 15,
            gambar: ''
        },
        {
            id: 3,
            nama: 'Teh Botol',
            kategori: 'Minuman',
            hargaBeli: 3500,
            hargaJual: 5000,
            stok: 10,
            gambar: ''
        },
        {
            id: 4,
            nama: 'Chitato',
            kategori: 'Snack',
            hargaBeli: 7500,
            hargaJual: 9500,
            stok: 8,
            gambar: ''
        },
        {
            id: 5,
            nama: 'Biskuit Roma',
            kategori: 'Snack',
            hargaBeli: 6000,
            hargaJual: 8000,
            stok: 12,
            gambar: ''
        },
        {
            id: 6,
            nama: 'Minyak Goreng 1L',
            kategori: 'Kebutuhan Rumah',
            hargaBeli: 16000,
            hargaJual: 18500,
            stok: 6,
            gambar: ''
        },
        {
            id: 7,
            nama: 'Gula Pasir 1kg',
            kategori: 'Kebutuhan Rumah',
            hargaBeli: 15000,
            hargaJual: 17500,
            stok: 9,
            gambar: ''
        },
        {
            id: 8,
            nama: 'Kopi Sachet',
            kategori: 'Minuman',
            hargaBeli: 1800,
            hargaJual: 2500,
            stok: 25,
            gambar: ''
        },
        {
            id: 9,
            nama: 'Sabun Mandi',
            kategori: 'Kebutuhan Rumah',
            hargaBeli: 3500,
            hargaJual: 5000,
            stok: 7,
            gambar: ''
        },
        {
            id: 10,
            nama: 'Susu UHT',
            kategori: 'Minuman',
            hargaBeli: 5000,
            hargaJual: 7000,
            stok: 0,
            gambar: ''
        }
    ];
    jumlahProduk() {
        return this.products.length;
    }

    cariProduk(keyword: string) {
        var hasil: any[] = [];

        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].nama.toLowerCase().includes(keyword.toLowerCase())) {
                hasil.push(this.products[i]);
            }
        }

        return hasil;
    }

    tambahProduk(produk: any) {
        this.products.push(produk);
    }

    editProduk(index: number, produk: any) {
        this.products[index] = produk;
    }
}
