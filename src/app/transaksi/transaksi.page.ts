import { Component, OnInit} from '@angular/core';
import { Transaksi } from '../services/transaksi';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaksi',
  templateUrl: './transaksi.page.html',
  styleUrls: ['./transaksi.page.scss'],
  standalone: false
})
export class TransaksiPage implements OnInit {
  daftarTransaksi: any[] = [];
  selectedTransaksi: any = null;

  constructor(
    public transaksiService: Transaksi,
    private router: Router
  ) {}

  ngOnInit() {
  }

  refresh() {
    this.loadData();
  }

  loadData() {
    this.daftarTransaksi = this.transaksiService.transactions;
  }

  tampilkanDetail(index: number) {
    this.router.navigate(['/transaksi/detail', index]);
  }

  tutupDetail() {
    this.selectedTransaksi = null;
  }
}