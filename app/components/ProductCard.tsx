"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const ProductCard = ({ product }: any) => {
  const router = useRouter();
  const handleNavigate = (id: number) => {
    router.push(`products/${id}`);
  };
  return (
    <div
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow h-full cursor-pointer"
      onClick={() => handleNavigate(product.id)}
    >
      <div style={{ width: "100%", height: "200px", position: "relative" }}>
        <Image
          alt={product.title}
          src={product.thumbnail}
          layout="fill"
          objectFit="fill"
        />
      </div>

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {product.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {product.description}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
