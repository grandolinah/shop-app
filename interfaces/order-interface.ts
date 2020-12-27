import { ProductInterface } from './product-interface';

export interface OrderInterface {
  totalPrice: number;
  items: ProductInterface[];
  orderId: string;
  date: number;
}
