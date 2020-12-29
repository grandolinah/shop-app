import { ProductInterface } from './product-interface';

export interface OrderInterface {
  totalAmount: number;
  items: ProductInterface[];
  orderId: string;
  date: number;
}
