import { Component, OnInit } from '@angular/core';
import { deleteProduct } from './delete-product';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {

  constructor(public deleteproduct: deleteProduct) { }

  ngOnInit(): void {
  }

}
