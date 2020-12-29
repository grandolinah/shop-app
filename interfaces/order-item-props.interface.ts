import { ProductInterface } from './product-interface';

export interface OrderItemPropsInterface {
  items: ProductInterface[];
  totalAmount: number;
  orderId: string;
  date: number;
}
