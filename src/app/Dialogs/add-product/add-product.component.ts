import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { productStock } from 'src/app/enums/product';
import { productRemote } from 'src/app/remote/product.remote';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddProductComponent>,
    private productRemote: productRemote,
    private productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required]],
      title: ['', [Validators.required, Validators.maxLength(50)]],
      price: ['', [Validators.required]],
      stock: [this.enums.InStock],
      rating: [''],
      image: ['', [Validators.required, Validators.pattern('')]],
      description: ['', [Validators.required, Validators.minLength(150), Validators.maxLength(250)]],
      location: ['', [Validators.required]],
      category: ['', [Validators.required]]
    })
    if (this.data.isEdit)
      this.productForm.setValue(this.data.product)
  }

  public get enums(): typeof productStock {
    return productStock;
  }

  get f() { return this.productForm.controls }

  addProduct() {
    this.submitted = true;

    if (this.productForm.invalid)
      return;

    if (!this.data.isEdit) {
      this.productRemote.addProduct(this.productForm.value).then(() => {
      })
    }
    else {
      let index = this.productService.products.findIndex(x => x.id === this.productForm.controls['id'].value)
      this.productService.products.splice(index, 1, this.productForm.value);
      this.productService.setProducts();
    }
    this.dialogRef.close()
  }
}
