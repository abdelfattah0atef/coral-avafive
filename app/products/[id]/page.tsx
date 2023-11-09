"use client";

import ProductCard from "@/app/components/ProductCard";
import React from "react";

const getProduct = async (id: number) => {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("###Error", error);
  }
};

const ProductPage = async ({ params }: any) => {
  const product = await getProduct(params.id);
  if (!product) {
    <div className="p-5">Loading...</div>;
  }
  return (
    <div className="p-5">
      <ProductCard product={product} />
    </div>
  );
};

export default ProductPage;
