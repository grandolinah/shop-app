export interface ProductItemPropsInterface {
  title: string;
  price: number;
  imageUrl: string;
  onViewDetail(): void;
  onAddToCart(): void;
}
