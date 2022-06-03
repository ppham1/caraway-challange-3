import React, { useState } from "react";
import { formatter } from "../utils/helpers";
import PrimaryImage from "../components/PrimaryImage";
import ProductVariants from "./ProductVariants";

const ProductCard = ({ product }) => {
  //grabbing the basic product information
  const title = product.title.split(" - ");
  const price = product.variants[0].price;
  const primaryImgSrc = product.images[0].src;
  const secondaryImgSrc = product.images[1].src;
  const altText = product.images.created_at;
  const optionName = product.options[0].name;
  const productType = product.product_type;
  //getting three days time to check for new item
  const pastTime = new Date(product.published_at);
  const now = new Date();
  const threeDaysInMs = 3 * 24 * 60 * 60 * 1000;
  const timeDiffInMs = now.getTime() - pastTime.getTime();
  const isNewProduct = timeDiffInMs >= threeDaysInMs ? false : true;

  return (
    <a className="group" key={product.id}>
      <div className="w-full bg-gray-200 rounded-3xl overflow-hidden relative cursor-pointer">
        <PrimaryImage
          primaryImgSrc={primaryImgSrc}
          secondaryImgSrc={secondaryImgSrc}
        />
        {/* if item is new then show the new tag */}
        {isNewProduct ? (
          <div className=" absolute top-0 right-0 w-fit p-2 my-3 text-sm rounded-full flex cursor-pointer mr-3 text-white bg-green-600">
            NEW
          </div>
        ) : (
          ""
        )}
      </div>
      <h4 className="mt-4 text-base font-medium text-gray-900">{title[0]}</h4>
      <h4 className="mt-1 text-sm text-gray-700 float-right">
        {/* format the price to USD */}
        {formatter.format(price)}
      </h4>
      <p className="mt-1 text-sm text-gray-700 italic">{title[1]}</p>
      <p className="mt-1 text-sm text-gray-700 ">{optionName}</p>
      <ProductVariants product={product} key={product.id} />
    </a>
  );
};

export default ProductCard;
