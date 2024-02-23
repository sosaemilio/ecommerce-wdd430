import React from "react";
import Image from "next/image";
import Link from "next/link";
import Styles from "./Footer.module.css";

export default function Footer() {
	return (
		<div className="container">
			<footer className="flex flex-col">
                <div className={Styles.footerLinks}>
                    <Link href="/">Home</Link>
                    <Link href="/shop">Shop</Link>
                    <Link href="/about-us">Help</Link>
                </div>
                <p className="text-center">Brigham Young University - Idaho {new Date().getFullYear()}</p>
			</footer>
		</div>
	);
}
