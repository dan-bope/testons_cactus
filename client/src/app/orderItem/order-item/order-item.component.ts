import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {OrderItemServiceService} from 'src/app/service/orderItem/order-item-service.service';
import {UserServiceService} from 'src/app/service/user/user-service.service';
import {User} from 'src/app/class/user/user';
import {OrderItem} from 'src/app/class/orderItem/orderItem';


@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent {

  user!: User;
  orderItems!: OrderItem[];
  userId!: any;


  constructor(private route : ActivatedRoute,  private userService: UserServiceService, private orderItemService: OrderItemServiceService,private router: Router){
  }

  ngOnInit() {
    this.userId = this.userService.getUserIdConnected();
    this.orderItemService.getUserOrderItem(parseInt(this.userId)).subscribe((orderItems : OrderItem[]) => {
      this.orderItems = orderItems;
      console.log(this.orderItems);
  })}


  // getUserOrderItems(){
  //   this.userId = this.userService.getUserIdConnected();
  //   this.orderItemService.getUserOrderItem(parseInt(this.userId)).subscribe((orderItems : OrderItem[]) => {
  //     this.orderItems = orderItems;
  //     console.log(this.orderItems);
  //   })
  // }

//   getTotal () : Number {
//     var reducer = (acc: any, val: any) => acc + val;
//     return this.orderItems ? this.orderItems.map((item) => item.totalPrice).reduce(reducer) : 0.0
// }
}
