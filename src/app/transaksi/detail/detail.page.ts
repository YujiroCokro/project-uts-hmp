import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaksi } from '../../services/transaksi';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: false
})
export class DetailPage implements OnInit {
  transaksiDetail: any = null;

  constructor(
    private route: ActivatedRoute,
    public transaksiService: Transaksi
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      let index = params['id'];
      this.transaksiDetail = this.transaksiService.transactions[index];
    });
  }
}