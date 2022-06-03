import React, { useState, useContext } from "react";

const ProductVariants = ({ product }) => {
  //mapping through each product to display their variants
  return product.variants.map((variantName) => {
    {
      return (
        <div
          key={variantName.id}
          className="inline-flex items-center flex-wrap list-none m-2"
        >
          <li className=" text-xs relative">
            <input
              className="cursor-pointer h-5 rounded appearance-none top-0 left-0 right-0 bottom-0 block absolute  checked:bg-slate-500 hover:bg-gray-300 opacity-25"
              id={variantName.id}
              type="radio"
              name={product.id}
              value={variantName.title}
            />
            <label
              className="border-black p-1 cursor-pointer z-100  rounded checked:bg-slate-500"
              for={variantName.title}
            >
              {variantName.title}
            </label>
          </li>
        </div>
      );
    }
  });
};
export default ProductVariants;
