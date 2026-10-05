import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produk } from '../../services/produk';
import { Keranjang } from '../../services/keranjang';
import { AnimationController } from '@ionic/angular';

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
    private route: ActivatedRoute,
    private produkService: Produk,
    private keranjangService: Keranjang,
    private animationCtrl: AnimationController
  ) { }

  ngOnInit() {
    this.products = this.produkService.products;

    this.route.params.subscribe(params => {
      this.id = Number(params['id']);
    });
  }

  ionViewDidEnter() {
    this.fadeInInfo();
  }

  fadeInInfo() {
    const item = document.getElementById('infoProduk') as HTMLElement;
    if (!item) return;

    const animation = this.animationCtrl.create()
      .addElement(item)
      .duration(500)
      .fromTo('opacity', '0', '1')
      .fromTo('transform', 'translateY(20px)', 'translateY(0)');
    animation.play();
  }

  tambahKeranjang() {
    this.keranjangService.tambahKeranjang(this.products[this.id]);
  }
}
