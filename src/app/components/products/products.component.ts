import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productContainer:number=0
  products: any = [
    {
      productImage: 'assets/imgs/صور-للجوافة-2.jpg',
      productName: 'جونسون، صابون للاستحمام 15ملم',
      productPrice: '4.00',
    },
    {
      productImage: 'assets/imgs/صور-للجوافة-2.jpg',
      productName: 'جونسون، صابون للاستحمام 15ملم',
      productPrice: '4.00',
    },
    {
      productImage: 'assets/imgs/صور-للجوافة-2.jpg',
      productName: 'جونسون، صابون للاستحمام 15ملم',
      productPrice: '4.00',
    },
    {
      productImage: 'assets/imgs/صور-للجوافة-2.jpg',
      productName: 'جونسون، صابون للاستحمام 15ملم',
      productPrice: '4.00',
    },
    {
      productImage: 'assets/imgs/صور-للجوافة-2.jpg',
      productName: 'جونسون، صابون للاستحمام 15ملم',
      productPrice: '4.00',
    },
    {
      productImage: 'assets/imgs/صور-للجوافة-2.jpg',
      productName: 'جونسون، صابون للاستحمام 15ملم',
      productPrice: '4.00',
    },
    {
      productImage: 'assets/imgs/صور-للجوافة-2.jpg',
      productName: 'جونسون، صابون للاستحمام 15ملم',
      productPrice: '4.00',
    },
    {
      productImage: 'assets/imgs/صور-للجوافة-2.jpg',
      productName: 'جونسون، صابون للاستحمام 15ملم',
      productPrice: '4.00',
    },
    {
      productImage: 'assets/imgs/صور-للجوافة-2.jpg',
      productName: 'جونسون، صابون للاستحمام 15ملم',
      productPrice: '4.00',
    },
    {
      productImage: 'assets/imgs/صور-للجوافة-2.jpg',
      productName: 'جونسون، صابون للاستحمام 15ملم',
      productPrice: '4.00',
    },
    {
      productImage: 'assets/imgs/صور-للجوافة-2.jpg',
      productName: 'جونسون، صابون للاستحمام 15ملم',
      productPrice: '4.00',
    },
    {
      productImage: 'assets/imgs/صور-للجوافة-2.jpg',
      productName: 'جونسون، صابون للاستحمام 15ملم',
      productPrice: '4.00',
    },
    {
      productImage: 'assets/imgs/صور-للجوافة-2.jpg',
      productName: 'جونسون، صابون للاستحمام 15ملم',
      productPrice: '4.00',
    },
    {
      productImage: 'assets/imgs/صور-للجوافة-2.jpg',
      productName: 'جونسون، صابون للاستحمام 15ملم',
      productPrice: '4.00',
    },
    {
      productImage: 'assets/imgs/صور-للجوافة-2.jpg',
      productName: 'جونسون، صابون للاستحمام 15ملم',
      productPrice: '4.00',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    this.products= this.products.map((product:any)=>{
      product.selected=false
      product.count=0
      return product;
    })
    console.log(this.products)
  }
  increaseCounter(product){
    product.selected=true
    product.count++
    console.log(this.products)
  }
}
