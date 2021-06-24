import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { deleteProduct, deleteProductProperty } from 'src/app/Dialogs/delete-product/delete-product';
import { DeleteProductComponent } from 'src/app/Dialogs/delete-product/delete-product.component';
import { product } from 'src/app/models/product';
import { productRemote } from 'src/app/remote/product.remote';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  constructor(
    private productRemote: productRemote,
    private productService: ProductService,
    public matDialog: MatDialog,
    public deleteProductService: deleteProduct) { }

  trash: product[] = [];

  ngOnInit(): void {
    this.productRemote.getAllTrashProduct().then((res: product[]) => {
      this.trash = res;
    })
  }

  restoreProduct(id: number) {
    let index = this.trash.findIndex(x => x.id === id);
    this.productService.products.push(this.trash[index]);
    // this.trash.splice(index, 1);
    this.trash.splice(index, 1);
    // this.productService.trash.splice(index, 1);
    this.productService.setProducts();
  }

  deleteProduct(id: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    var deleteProductProperties: deleteProductProperty = {
      message: 'Are you sure you want to delete this product ?',
      cancel: () => {
        dialog.close()
      },
      delete: () => {
        let index = this.trash.findIndex(x => x.id === id);
        this.trash.splice(index, 1);
        this.productService.setProducts()
        dialog.close()
      }
    };
    this.deleteProductService.setProperty(deleteProductProperties);
    const dialog = this.matDialog.open(DeleteProductComponent, dialogConfig)
  }
}
