import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/models/product';
import { productRemote } from 'src/app/remote/product.remote';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  Product: product;
  constructor(private productRemote: productRemote, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProductDetail(this.route.snapshot.params.id);
  }

  getProductDetail(id: number) {
    this.productRemote.getProduct(id).subscribe((res: any) => {
      this.Product = res[0];
    })
  }
}
