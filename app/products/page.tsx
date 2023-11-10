import Pagination from "../components/Pagination";
import ProductCard from "../components/ProductCard";

interface ProductPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const getProducts = async ({
  skip,
  limit,
}: {
  skip: string | string[];
  limit: string | string[];
}) => {
  try {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    const data = await res.json();
    return data;
  } catch (error) {}
};

const ProductsPage = async ({ searchParams }: ProductPageProps) => {
  const skip = searchParams["skip"] ?? "0";
  const limit = searchParams["limit"] ?? "9";
  const data = await getProducts({ skip, limit });

  const numberOfPages = Math.ceil(data.total / Number(limit));

  if (!data) {
    <div className="p-5">Loading...</div>;
  }
  return (
    <div className="p-5">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {data?.products?.map((product: any) => (
          <div key={product.id} className="col-span-1">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <Pagination numberOfPages={numberOfPages} total={data.total} />
      </div>
    </div>
  );
};

export default ProductsPage;
