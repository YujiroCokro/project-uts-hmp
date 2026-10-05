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
            gambar: 'https://www.indomie.co.id/Content/Product/indomie-goreng-spesial-plus_big.png'
        },
        {
            id: 2,
            nama: 'Aqua 600ml',
            kategori: 'Minuman',
            hargaBeli: 2500,
            hargaJual: 3500,
            stok: 15,
            gambar: 'https://cdn.bormadago.com/media/images/products/2021/06/DSC_0047_copy_TaS0jlu.jpg'
        },
        {
            id: 3,
            nama: 'Teh Botol',
            kategori: 'Minuman',
            hargaBeli: 3500,
            hargaJual: 5000,
            stok: 10,
            gambar: 'https://image.astronauts.cloud/product-images/2026/7/TehBotolSosroJasmine_df1c98a7-998f-418d-b004-c090c222e091_900x900.jpeg'
        },
        {
            id: 4,
            nama: 'Chitato',
            kategori: 'Snack',
            hargaBeli: 7500,
            hargaJual: 9500,
            stok: 8,
            gambar: 'https://image.astronauts.cloud/product-images/2026/7/chitatosapipanggang1_5e594ccd-4ab3-4a4e-8ccc-6ea7e2515976_900x900.jpg'
        },
        {
            id: 5,
            nama: 'Biskuit Roma',
            kategori: 'Snack',
            hargaBeli: 6000,
            hargaJual: 8000,
            stok: 12,
            gambar: 'https://cdn.kerbel.in/assets/product/product_NSMXI2WUZT_1692076113_1.webp'
        },
        {
            id: 6,
            nama: 'Minyak Goreng 1L',
            kategori: 'Kebutuhan Rumah',
            hargaBeli: 16000,
            hargaJual: 18500,
            stok: 6,
            gambar: 'https://cdn.bormadago.com/media/images/products/2021/04/2371a.jpg'
        },
        {
            id: 7,
            nama: 'Gula Pasir 1kg',
            kategori: 'Kebutuhan Rumah',
            hargaBeli: 15000,
            hargaJual: 17500,
            stok: 9,
            gambar: 'https://images.alodokter.com/dk0z4ums3/image/upload/v1762314536/attached_image/gula-pasir-inilah-manfaat-dan-risiko-di-baliknya-0-alodokter.jpg'
        },
        {
            id: 8,
            nama: 'Kopi Sachet',
            kategori: 'Minuman',
            hargaBeli: 1800,
            hargaJual: 2500,
            stok: 25,
            gambar: 'https://apps.santosjayaabadi.co.id/factoryoutlet/contents/images/lg/products/PRODUK_GOOD_DAY_CAPPUCCINO_(RTG,_12_X_10_X_25_GR)_(20171229020250).jpg'
        },
        {
            id: 9,
            nama: 'Sabun Mandi',
            kategori: 'Kebutuhan Rumah',
            hargaBeli: 3500,
            hargaJual: 5000,
            stok: 7,
            gambar: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/dve/dve03485/y/33.jpg'
        },
        {
            id: 10,
            nama: 'Susu UHT',
            kategori: 'Minuman',
            hargaBeli: 5000,
            hargaJual: 7000,
            stok: 0,
            gambar: 'https://image.astronauts.cloud/product-images/2026/7/UltraMilkFullCreamSu_e9418401-4eeb-49e3-9792-8e4b0df68843_900x900.jpg'
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
        produk.id = this.products.length + 1;
        this.products.push(produk);
    }

    editProduk(index: number, produk: any) {
        produk.id = this.products[index].id;
        this.products[index] = produk;
    }
}
