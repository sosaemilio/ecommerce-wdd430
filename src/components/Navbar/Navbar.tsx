import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<h6 className={styles.logo}>GamesKart</h6>
			<ul className={styles.links}>
				<li className={styles.navlink}>
				<Link href="/">Home</Link>
				</li>
				<li className={styles.navlink}>
				<Link href="/shop">Shop</Link>
				</li>
				<li className={styles.navlink}>
				<Link href="/cart">Cart</Link>
				</li>
			</ul>
		</nav>
	);
}
