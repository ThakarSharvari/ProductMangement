import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddProductComponent } from 'src/app/Dialogs/add-product/add-product.component';
import { deleteProduct, deleteProductProperty } from 'src/app/Dialogs/delete-product/delete-product';
import { DeleteProductComponent } from 'src/app/Dialogs/delete-product/delete-product.component';
import { productStock } from 'src/app/enums/product';
import { product } from 'src/app/models/product';
import { productRemote } from 'src/app/remote/product.remote';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  constructor(
    private productRemote: productRemote,
    private productService: ProductService,
    public router: Router,
    public matDialog: MatDialog,
    public deleteProductService: deleteProduct) { }

  productList: product[] = []
  @ViewChild('search') search: ElementRef;

  category = [{ value: 'Toys', checked: false }, { value: 'Home Appliances', checked: false }, { value: 'Electronics', checked: false }];
  location = [{ value: 'India', checked: false }, { value: 'USA', checked: false }, { value: 'UK', checked: false }, { value: 'China', checked: false }];

  selectedCategoryFilters: string[] = [];
  selectedLocationFilters: string[] = [];

  ngOnInit() {
    this.getProducts();
  }

  public get enums(): typeof productStock {
    return productStock;
  }

  getProducts() {
    this.productRemote.getAllProducts().then((res: product[]) => {
      this.productList = res;
    })
  }

  viewProduct(id: number) {
    this.router.navigate(['/product-detail'],)
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
        let index = this.productList.findIndex(x => x.id === id);
        this.productService.trash.push(this.productList[index]);
        this.productList.splice(index, 1);
        this.productService.setProducts();
        dialog.close()
      }
    };
    this.deleteProductService.setProperty(deleteProductProperties);
    const dialog = this.matDialog.open(DeleteProductComponent, dialogConfig)
  }

  searchProduct() {
    let search = this.search.nativeElement.value;
    if (search === "")
      this.getProducts()
    else
      this.productList = this.productService.products.filter(x => x.name == search)
    this.location.forEach(x => x.checked = false);
    this.category.forEach(x => x.checked = false);
    this.selectedLocationFilters = []; this.selectedCategoryFilters = []
  }

  categoryFilter(category: any, checked: boolean) {
    let index = this.selectedCategoryFilters.indexOf(category.value)
    category.checked = checked;
    if (index != -1) {
      this.selectedCategoryFilters.splice(index, 1)
    } else
      this.selectedCategoryFilters.push(category.value)
    this.filters()
  }

  locationFilter(location: any, checked: boolean) {
    let index = this.selectedLocationFilters.indexOf(location.value)
    location.checked = checked;
    if (index != -1) {
      this.selectedLocationFilters.splice(index, 1)
    } else
      this.selectedLocationFilters.push(location.value)
    this.filters()
  }

  filters() {
    if (this.selectedLocationFilters.length > 0 && this.selectedCategoryFilters.length > 0)
      this.productList = this.productService.products.filter(x => this.selectedLocationFilters.includes(x.location) && this.selectedCategoryFilters.includes(x.category))
    else if (this.selectedLocationFilters.length > 0)
      this.productList = this.productService.products.filter(x => this.selectedLocationFilters.includes(x.location))
    else if (this.selectedCategoryFilters.length > 0)
      this.productList = this.productService.products.filter(x => this.selectedCategoryFilters.includes(x.category))
    else
      this.getProducts()
  }

  addProduct() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.height = '600px',
      dialogConfig.width = '600px',
      dialogConfig.data = {
        isEdit: false
      }
    const dialog = this.matDialog.open(AddProductComponent, dialogConfig)
  }

  editProduct(product: product) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.height = '800px',
      dialogConfig.width = '800px',
      dialogConfig.data = {
        isEdit: true,
        product: product
      }
    const dialog = this.matDialog.open(AddProductComponent, dialogConfig)
  }
}

