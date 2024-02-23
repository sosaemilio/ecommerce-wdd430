"use client"
import Image from 'next/image';
import styles from './ProductPage.module.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/lib/redux/cart.slice';

export default function ProductPage ({ product }: { product: {image: string, product: string, category: string, price: number} }) {
    const dispatch = useDispatch();
    return (
        <div className={styles.productContainer}>
            <div className={styles.productImage}>
                <div>
                    <Image
                        src={product.image}                    
                        width={400}
                        height={300}
                        className="img-fluid object-fit-cover" 
                        style={{ height: '100%', width: '100%'}}
                        alt="Product Image" 
                    />
                </div>
            </div>
            <div className='flex-column px-10'>
                <div>
                    <h1 className='fw-bold'>{product.product}</h1>
                    <h2 className='fw-semibold'>$ {product.price}</h2>
                    <br></br>

                    <h3>
                        Product Description
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit necessitatibus maxime molestias, quibusdam dignissimos natus dolore ducimus repellat nulla excepturi doloremque nam veritatis accusamus sed, velit repudiandae sequi quisquam amet?
                    </p>
                    <p className='fw-semibold'>Product Category: {product.category}</p>
                    <button 
                        className={styles.button}
                        onClick={() => {
                            dispatch(addToCart(product));
                        }}
                        >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}