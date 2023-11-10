import Pagination from "@/app/components/Pagination";
import ProductCard from "@/app/components/ProductCard";
import React from "react";

interface CategoryPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

interface GetCategoryProps {
  id: number;
}

const getCategory = async (id: number) => {
  try {
    const res = await fetch(`https://dummyjson.com/products/category/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("###Error", error);
  }
};

const CategoryPage = async ({ params }: any) => {
  const data = await getCategory(params.id);

  return (
    <div className="p-5">
      {!!data?.products?.length && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {data?.products?.map((product: any) => (
            <div key={product.id} className="col-span-1">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
      {!data?.products?.length && <p>No Data Found</p>}
    </div>
  );
};

export default CategoryPage;
