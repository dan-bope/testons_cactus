import { Product } from 'src/app/class/product/product';
export class OrderItem {
  id!:number;
  addedOn!: Date;
  quantity!: number;
  product!: Product;
  totalPrice!: number;
}
