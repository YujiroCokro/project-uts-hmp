import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produk } from '../../services/produk';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
  standalone: false,
})
export class FormPage implements OnInit {

  id = -1; //klo 0,1,2 dst buat ngedit produk yg udh ada sesuai index masing-masing

  // INI REACTIVE FORM
   formProduk = new FormGroup({
    nama: new FormControl('', Validators.required),
    kategori: new FormControl(''),
    hargaBeli: new FormControl(0, [Validators.required, Validators.min(1)]),
    hargaJual: new FormControl(0, [Validators.required, Validators.min(1)]),
    stok: new FormControl(0, [Validators.required, Validators.min(0)]),
    gambar: new FormControl('')
  });

  constructor(private route: ActivatedRoute, private produkService: Produk, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id'] != undefined) {
        this.id = params['id'];

        let produk = this.produkService.products[this.id];
        this.formProduk.patchValue({ //patchValue: buat mskin data produk yg dah ada ke dlm
          nama: produk.nama,         //Reactive Form buat ditampilin sbgi data Edit.
          kategori: produk.kategori,
          hargaBeli: produk.hargaBeli,
          hargaJual: produk.hargaJual,
          stok: produk.stok,
          gambar: produk.gambar
        });
      }
    });
  }

  simpan() {
    this.formProduk.markAllAsTouched(); //ini buat pengecekan klo user ga ngisi lgsg submit
    if (this.formProduk.invalid) {
      return;
    }

    let data = {
      nama: this.formProduk.value.nama,
      kategori: this.formProduk.value.kategori,
      hargaBeli: this.formProduk.value.hargaBeli,
      hargaJual: this.formProduk.value.hargaJual,
      stok: this.formProduk.value.stok,
      gambar: this.formProduk.value.gambar
    };

    if (this.id == -1) {
      this.produkService.tambahProduk(data);
    }
    else {
      this.produkService.editProduk(this.id, data);
    }

    this.router.navigate(['/produk']);
  }


}
