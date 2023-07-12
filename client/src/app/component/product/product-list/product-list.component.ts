import { Component } from '@angular/core';
import { Product } from 'src/app/class/product/product';
import { Router } from '@angular/router';
import { ProductServiceService } from 'src/app/service/product/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] | undefined;
  product!: Product;
  term! : string

  constructor(private productService: ProductServiceService, private router: Router){
  }

  ngOnInit() {
    this.productService.findAll().subscribe(data => {
      this.products = data;

      for(let product of this.products){
        product.image = "assets/Images/" + product.id + "/" + product.image;
      }
    })
  }

}
