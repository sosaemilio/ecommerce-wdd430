import ProductCard from '@/components/ProductCard/ProductCard';
import { fetchProductsByCategory } from '@/lib/data';
import styles from "./Shop.module.css"

export default async function Category({ params }: { params: { category: string } }) {
    const category = params.category;
    const products = await fetchProductsByCategory(category);

    return (
        <div className={styles.container}>
          <h1 className={styles.title}>Results for {category}</h1>
          <div className={styles.cards}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
    );
};