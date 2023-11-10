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
      {!!data.products.length && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {data?.products?.map((product: any) => (
            <div key={product.id} className="col-span-1">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
      {!data?.products?.length && <p>No Data Found</p>}

      {!!data.products.length && data.total > limit && (
        <div className="flex items-center justify-center">
          <Pagination
            path="products"
            numberOfPages={numberOfPages}
            total={data.total}
            skip={skip}
            limit={limit}
          />
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
