export interface CartItemPropsInterface {
  quantity: number;
  title: string;
  amount: number;
  id?: string;
  onRemove?(id: string): void;
}
