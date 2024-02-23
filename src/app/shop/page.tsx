import ProductCard from '@/components/ProductCard/ProductCard';
import { fetchProducts } from '@/lib/data';
import styles from "./Shop.module.css"

export default async function ShopPage () {
  let products = await fetchProducts();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Results</h1>
      <div className={styles.cards}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};