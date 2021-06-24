import { Injectable } from '@angular/core';
import { productStock } from '../enums/product';
import { product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products: product[] = [
    {
      id: 1,
      image: 'https://www.reliancedigital.in/medias/LG-GL-S292RPZY-Refrigerators-491666528-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzM0N3xpbWFnZS9qcGVnfGltYWdlcy9oYWEvaDI4LzkzMzk5Mzg3NjY4NzguanBnfDkwMWZlYTcwMzczN2ZiZjE5MjhhZDE3YjQyMDJjYTI5MTY5MTQ3NjM2YTA2MWJhOGVjZmNlMzhmNzg2NDQ3OWQ',
      description: 'The LG 260 litres 2 Star Double Door Refrigerator comes with a brilliant design that will level up your kitchen decor. It comes with a total capacity of 260 Litre which effortlessly and its 2 star rating is convincing because even continuous use will not consume much units.',
      name: 'Phone1',
      title: 'Test Title',
      rating: 4,
      price: 3000,
      location: "India",
      category: "Home Appliances",
      stock: productStock.InStock
    },
    {
      id: 2,
      image: 'https://media.wired.com/photos/5f401ecca25385db776c0c46/master/w_2560%2Cc_limit/Gear-How-to-Apple-ios-13-home-screen-iphone-xs-06032019_big_large_2x.jpg',
      description: 'The All New OnePlus 9 R, Level Up - the New onePlus 9R comes with Qualcomm Snapdragon 870 5G with upgraded Qualcomm Kryo 585 CPU that performs intense mobile computing at up to 3.2 GHz and also comes with an ultra-fast Qualcomm Adreno 650 GP.',
      name: 'Phone2',
      title: 'Test Title',
      rating: 4,
      price: 3000,
      location: "India",
      category: "Electronics",
      stock: productStock.OutStock
    },
    {
      id: 3,
      image: 'https://images.indianexpress.com/2019/09/toys.jpg',
      description: 'Designed in an attractive colour from soft fabric, your kids will not stop hugging and squeezing this plush toy in their arms. This cute soft toy is sure to become your childs best companion! Extremely soft and cosy with heartwarming.',
      name: 'Phone3',
      title: 'Test Title',
      rating: 4,
      price: 3000,
      location: "India",
      category: "Toys",
      stock: productStock.InStock
    },
    {
      id: 4,
      image: 'https://assets.ajio.com/medias/sys_master/root/hcf/h3d/14233206620190/-473Wx593H-4912802430-multi-MODEL.jpg',
      description: 'Designed in an attractive colour from soft fabric, your kids will not stop hugging and squeezing this plush toy in their arms. This cute soft toy is sure to become your childs best companion! Extremely soft and cosy with heartwarming eyes that beg for a cuddly hug, this soft toy is irresistible! Made from top quality material, this toy is easy to carry and cuddle',
      name: 'Phone4',
      title: 'Test Title',
      rating: 4,
      price: 3000,
      location: "UK",
      category: "Toys",
      stock: productStock.InStock
    },
    {
      id: 5,
      image: 'https://assets.ajio.com/medias/sys_master/root/hed/h03/17107034439710/-473Wx593H-4913935170-multi-MODEL.jpg',
      description: 'Designed in an attractive colour from soft fabric, your kids will not stop hugging and squeezing this plush toy in their arms. This cute soft toy is sure to become your childs best companion! Extremely soft and cosy with heartwarming eyes that beg for a cuddly hug, this soft toy is irresistible! Made from top quality material, this toy is easy to carry and cuddle',
      name: 'Phone5',
      title: 'Test Title',
      rating: 4,
      price: 3000,
      location: "India",
      category: "Toys",
      stock: productStock.InStock
    },
    {
      id: 6,
      image: 'https://assets.ajio.com/medias/sys_master/root/hed/h03/17107034439710/-473Wx593H-4913935170-multi-MODEL.jpg',
      description: 'Designed in an attractive colour from soft fabric, your kids will not stop hugging and squeezing this plush toy in their arms. This cute soft toy is sure to become your childs best companion! Extremely soft and cosy with heartwarming eyes that beg for a cuddly hug, this soft toy is irresistible! Made from top quality material, this toy is easy to carry and cuddle',
      name: 'Phone6',
      title: 'Test Title',
      rating: 4,
      price: 3000,
      location: "India",
      category: "Toys",
      stock: productStock.InStock
    },
    {
      id: 7,
      image: 'https://images.indianexpress.com/2019/09/toys.jpg',
      description: 'Designed in an attractive colour from soft fabric, your kids will not stop hugging and squeezing this plush toy in their arms. This cute soft toy is sure to become your childs best companion! Extremely soft and cosy with heartwarming eyes that beg for a cuddly hug, this soft toy is irresistible! Made from top quality material, this toy is easy to carry and cuddle',
      name: 'Phone7',
      title: 'Test Title',
      rating: 4,
      price: 3000,
      location: "India",
      category: "Toys",
      stock: productStock.InStock
    },
    {
      id: 8,
      image: 'https://assets.ajio.com/medias/sys_master/root/hcf/h3d/14233206620190/-473Wx593H-4912802430-multi-MODEL.jpg',
      description: 'Designed in an attractive colour from soft fabric, your kids will not stop hugging and squeezing this plush toy in their arms. This cute soft toy is sure to become your childs best companion! Extremely soft and cosy with heartwarming eyes that beg for a cuddly hug, this soft toy is irresistible! Made from top quality material, this toy is easy to carry and cuddle',
      name: 'Phone8',
      title: 'Test Title',
      rating: 4,
      price: 3000,
      location: "India",
      category: "Toys",
      stock: productStock.InStock
    },
    {
      id: 9,
      image: 'https://assets.ajio.com/medias/sys_master/root/hed/h03/17107034439710/-473Wx593H-4913935170-multi-MODEL.jpg',
      description: 'Designed in an attractive colour from soft fabric, your kids will not stop hugging and squeezing this plush toy in their arms. This cute soft toy is sure to become your childs best companion! Extremely soft and cosy with heartwarming eyes that beg for a cuddly hug, this soft toy is irresistible! Made from top quality material, this toy is easy to carry and cuddle',
      name: 'Phone9',
      title: 'Test Title',
      rating: 4,
      price: 3000,
      location: "India",
      category: "Toys",
      stock: productStock.InStock
    },
    {
      id: 10,
      image: 'https://images.indianexpress.com/2019/09/toys.jpg',
      description: 'Designed in an attractive colour from soft fabric, your kids will not stop hugging and squeezing this plush toy in their arms. This cute soft toy is sure to become your childs best companion! Extremely soft and cosy with heartwarming eyes that beg for a cuddly hug, this soft toy is irresistible! Made from top quality material, this toy is easy to carry and cuddle',
      name: 'Phone10',
      title: 'Test Title',
      rating: 4,
      price: 3000,
      location: "India",
      category: "Toys",
      stock: productStock.InStock
    }
  ];
  trash: product[] = [];

  setProducts() {
    return new Promise((resolve, reject) => {

      localStorage.setItem('products', JSON.stringify(this.products))
      localStorage.setItem('trash', JSON.stringify(this.trash))
      resolve('Success')
    })
  }

  getProducts() {
    return new Promise((resolve, reject) => {
      this.products = JSON.parse(localStorage.getItem('products') || '{}')
      this.trash = JSON.parse(localStorage.getItem('trash') || '{}')
      resolve('Success')
    })
  }
}
