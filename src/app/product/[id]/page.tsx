import ProductPage from "@/components/ProductPage/ProductPage";
import { fetchProductById } from "@/lib/data";

export default async function Page({ params }: { params: { id: string } }) {
	const productData = await fetchProductById(params.id);
    console.log(productData);

    return (
        <main>
            <ProductPage product={productData}
            />
        </main>
    )
};
