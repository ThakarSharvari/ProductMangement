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
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6nqCHMGO8WQF5KnSqb-HqeiwQ3hdMx7KlxA&usqp=CAU',
      description: 'Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere',
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
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6nqCHMGO8WQF5KnSqb-HqeiwQ3hdMx7KlxA&usqp=CAU',
      description: 'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
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
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6nqCHMGO8WQF5KnSqb-HqeiwQ3hdMx7KlxA&usqp=CAU',
      description: 'Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.',
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
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6nqCHMGO8WQF5KnSqb-HqeiwQ3hdMx7KlxA&usqp=CAU',
      description: 'Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.',
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
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6nqCHMGO8WQF5KnSqb-HqeiwQ3hdMx7KlxA&usqp=CAU',
      description: 'Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.',
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
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6nqCHMGO8WQF5KnSqb-HqeiwQ3hdMx7KlxA&usqp=CAU',
      description: 'Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.',
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
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6nqCHMGO8WQF5KnSqb-HqeiwQ3hdMx7KlxA&usqp=CAU',
      description: 'Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.',
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
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6nqCHMGO8WQF5KnSqb-HqeiwQ3hdMx7KlxA&usqp=CAU',
      description: 'Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.',
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
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6nqCHMGO8WQF5KnSqb-HqeiwQ3hdMx7KlxA&usqp=CAU',
      description: 'Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.',
      name: 'Phone9',
      title: 'Test Title',
      rating: 4,
      price: 3000,
      location: "India",
      category: "Toys",
      stock: productStock.InStock
    },
    {
      id: 10,	/* width:60px;
      height:60px; */
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6nqCHMGO8WQF5KnSqb-HqeiwQ3hdMx7KlxA&usqp=CAU',
      description: 'Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.',
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
