"use client";

import React from "react";
import { Carousel } from "flowbite-react";
import Image from "next/image";

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-1">
          <div style={{ width: "100%", height: "400px", position: "relative" }}>
            <Image
              alt={product.title}
              src={product.thumbnail}
              layout="fill"
              objectFit="fill"
            />
          </div>
        </div>
        <div className="col-span-1">
          <h1 className="text-2xl font-bold text-[#171520] mb-2">
            {product.title}
          </h1>
          <p className="text-xl text-[#626262] mb-4">{product.description}</p>
          <div className="flex items-center space-x-2 mb-4">
            <p className="text-2xl font-bold text-[#626262]">
              ${product.price}
            </p>
            <s className="text-xl font-bold text-[#B6B6B6]">
              $
              {Number(
                Number(product.price) *
                  ((100 - Number(product.discountPercentage)) / 100)
              ).toFixed(2)}
            </s>
            <p className="text-base text-[#FF404B]">
              {Number(Number(product.discountPercentage)).toFixed(2)}% OFF
            </p>
          </div>
          <hr className="mb-4" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1">
              <h4 className="text-xl font-bold text-[#171520]">
                Delivery Details
              </h4>
              <p className="text-base text-[#626262]">
                Check estimated delivery date/pickup option.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <ProductCard product={product} /> */}
    </div>
  );
};

export default ProductPage;
