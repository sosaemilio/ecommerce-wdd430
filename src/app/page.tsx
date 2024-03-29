import CategoryCard from "@/components/CategoryCard/CategoryCard";

export default function Home() {
  return (
      <main className="container">
        <div className="small">
          <CategoryCard image="/images/category/uKQqsuA.jpg" name="Xbox" />
          <CategoryCard image="/images/category/3Y1DLYC.jpg" name="PS5" />
          <CategoryCard image="/images/category/Dm212HS.jpg" name="Switch" />
        </div>
        <div className="large">
          <CategoryCard image="/images/category/qb6IW1f.jpg" name="PC" />
          <CategoryCard
            image="/images/category/HsUfuRU.jpg"
            name="Accessories"
          />
        </div>
      </main>
  );
}
