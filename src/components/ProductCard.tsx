import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

export function ProductCard({ title, description, price, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="aspect-[4/3] bg-gray-100">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-gray-900">{title}</h3>
          <span className="text-amber-700">{price}</span>
        </div>
        <p className="text-gray-600">{description}</p>
        <button className="mt-4 w-full px-4 py-2 bg-amber-100 text-amber-700 rounded-lg hover:bg-amber-200 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
