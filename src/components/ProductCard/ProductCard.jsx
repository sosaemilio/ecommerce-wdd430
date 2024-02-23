"use client"
import Image from 'next/image';
import styles from './ProductCard.module.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/lib/redux/cart.slice';
import Link from 'next/link';

export default function ProductCard ({ product }) {
  const dispatch = useDispatch();
  return (
    <div className={styles}>
      <Link href={`/product/${product.id}`}>
        <Image src={product.image} height={300} width={220} />
      </Link>
      <h4 className={styles.title}>{product.product}</h4>
      <h5 className={styles.category}>{product.category}</h5>
      <p>$ {product.price}</p>
      <button 
        className={styles.button}
        onClick={() => {
          dispatch(addToCart(product));
        }}
        >Add to Cart
      </button>
    </div>
  );
};