import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/service/product/product-service.service';
import {UserServiceService} from 'src/app/service/user/user-service.service';
import { Product } from 'src/app/class/product/product';
import {User} from 'src/app/class/user/user';
import {OrderItemServiceService} from 'src/app/service/orderItem/order-item-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product!: Product;
  user!: User;
  public isProductInCart!: boolean
  userId!: any;

  constructor(private route : ActivatedRoute, private productService: ProductServiceService, private userService: UserServiceService, private orderItemService: OrderItemServiceService,private router: Router){
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.productService.findProductById(id).subscribe((product) => {
      this.product = product;
      product.image = "assets/Images/" + product.id + "/" + product.image;
    })

    this.userId = this.userService.getUserIdConnected();
      //this.user = user
      console.log(parseInt(this.userId));
      this.getOrderItem()
  }

  addOrderToCart() {
    //this.userId = 2;
    this.orderItemService.addOrderItem(parseInt(this.userId), this.product.id).subscribe(res => {
      this.getOrderItem();
  });
}

getOrderItem(){
  this.orderItemService.getOrderItem(parseInt(this.userId), this.product.id).subscribe({
    next: (result) => this.isProductInCart = true,
    error: (error: HttpErrorResponse)=>{
      this.isProductInCart = false
    }
  })
}

}

