import ProductCard from '@/components/ProductCard/ProductCard';
import { fetchProducts } from '@/lib/data';

export default async function ShopPage () {
  let products = await fetchProducts();

  return (
    <div className="container">
      <h1 className="title">All Results</h1>
      <div className="cards">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};