import React from "react";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
  return (
    <div className="p-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="col-span-1">
          <ProductCard />
        </div>
        <div className="col-span-1">
          <ProductCard />
        </div>
        <div className="col-span-1">
          <ProductCard />
        </div>
        <div className="col-span-1">
          <ProductCard />
        </div>{" "}
        <div className="col-span-1">
          <ProductCard />
        </div>
        <div className="col-span-1">
          <ProductCard />
        </div>
        <div className="col-span-1">
          <ProductCard />
        </div>
        <div className="col-span-1">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
