interface ProductCardProps {
  id: number;
  productName: string;
  category: string;
  createdAt: string;
}

export function ProductCard({
  id,
  productName,
  category,
  createdAt,
}: ProductCardProps) {
  return <div>Hello</div>;
}
