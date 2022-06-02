import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { formatter } from "../utils/helpers";
import PrimaryImage from "../components/PrimaryImage";
import ProductOptions from "./ProductOptions";

const ProductCard = ({ product }) => {
  const title = product.title.split(" - ");
  const price = product.variants[0].price;
  const primaryImgSrc = product.images[0].src;
  const secondaryImgSrc = product.images[1].src;
  const altText = product.images.created_at;
  const productType = product.product_type;

  return (
    <a className="group">
      <div className="w-full bg-gray-200 rounded-3xl overflow-hidden">
        <PrimaryImage
          primaryImgSrc={primaryImgSrc}
          secondaryImgSrc={secondaryImgSrc}
        />
      </div>
      <h4 className="mt-4 text-base font-medium text-gray-900">{title[0]}</h4>
      <h4 className="mt-1 text-sm text-gray-700 float-right">
        {formatter.format(price)}
      </h4>
      <p className="mt-1 text-sm text-gray-700 italic">{title[1]}</p>
      <p className="mt-1 text-sm text-gray-700 italic">{productType}</p>
    </a>
  );
};

export default ProductCard;
