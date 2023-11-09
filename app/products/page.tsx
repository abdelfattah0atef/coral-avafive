import ProductCard from "../components/ProductCard";

const getProducts = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("###Error", error);
  }
};

const ProductsPage = async () => {
  const data = await getProducts();
  if (!data) {
    <div className="p-5">Loading...</div>;
  }
  return (
    <div className="p-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {data?.products?.map((product: any) => (
          <div key={product.id} className="col-span-1">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
