export interface ProductItemPropsInterface {
  title: string;
  price: number;
  imageUrl: string;
  onViewDetail(): void;
  onAddToCard(): void;
}
