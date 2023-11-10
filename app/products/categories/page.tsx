import React from "react";

const getCategories = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products/categories");
    const data = await res.json();
    return data;
  } catch (error) {}
};
const CategoriesPage = async () => {
  const categories = await getCategories();

  return (
    <ul>
      {categories.map((category: string) => (
        <li key={category}>{category}</li>
      ))}
    </ul>
  );
};

export default CategoriesPage;
