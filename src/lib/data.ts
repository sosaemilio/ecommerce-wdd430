import {sql} from "@vercel/postgres";
import { Product } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchProducts() {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();

  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    console.log('Fetching revenue data...');
    //await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<Product>`SELECT * FROM products`;

    console.log('Data fetch completed after 3 seconds.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchProductById(id: string) {
  noStore();
  try {
    const data = await sql<Product>`
      SELECT
        products.id,
        products.product,
        products.category,
        products.image,
        products.price
      FROM products
      WHERE products.id = ${id};
    `;

    const product = data.rows.map((product) => ({
      ...product,
    }));

    console.log(product); 
    return product[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch product.');
  }
}

export async function fetchProductsByCategory(category: string) {
  noStore();
  try {
    const data = await sql<Product>`
      SELECT
        products.id,
        products.product,
        products.category,
        products.image,
        products.price
      FROM products
      WHERE products.category = ${category};
    `;

    console.log(data.rows);
    return data.rows;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch product.');
  }
}
