"use client"
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useSelector } from 'react-redux';

export default function Navbar() {
	// Selecting cart from global state
	const cart = useSelector((state) => state.cart);

	// Getting the count of items
	const getItemsCount = () => {
	  return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
	};
  
	return (
	  <nav className={styles.navbar}>
		{/* <h6 className={styles.logo}>GamesKart</h6> */}
		<Image src="/images/logo.png" height={34} width={121} alt="Apple Valley Logo"/>
		<ul className={styles.links}>
		  <li className={styles.navlink}>
			<Link href="/">Home</Link>
		  </li>
		  <li className={styles.navlink}>
			<Link href="/shop">Shop</Link>
		  </li>
		  <li className={styles.navlink}>
			<Link href="/cart">
			  <p>Cart({getItemsCount()})</p>
			</Link>
		  </li>
		</ul>
	  </nav>
	);
}
