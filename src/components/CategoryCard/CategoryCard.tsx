import Link from 'next/link';
import Image from 'next/image';
import styles from './CategoryCard.module.css';

export default function CategoryCard ({ image, name }: {image: string, name: string}) {
  return (
    <div className={styles.card}>
      <Image className={styles.image} src={image} height={700} width={1300} alt={`Category ${name}`}/>
      <Link href={`/category/${name.toLowerCase()}`}>
        <div className={styles.info}>
          <h3>{name}</h3>
          <p>SHOP NOW</p>
        </div>
      </Link>
    </div>
  );
}